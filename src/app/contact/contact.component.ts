import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  formD = {
    firstname: '',
    surname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  };

  @ViewChild('formElement', { static: true }) formElement!: ElementRef;

  ngAfterViewInit() {
    $('#submitBtn').on('click', (e: JQuery.Event) => {
      e.preventDefault();
      if (this.validateForm()) {
        this.submitForm();
      }
    });
  }

  validateForm() {
    let valid = true;

    const firstname = $('#firstname').val() as string;
    if (!firstname || firstname.trim() === '') {
      $('#firstname').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.firstname = firstname;
      $('#firstname').removeClass('is-invalid');
    }

    const surname = $('#surname').val() as string;
    if (!surname || surname.trim() === '') {
      $('#surname').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.surname = surname;
      $('#surname').removeClass('is-invalid');
    }

    const lastname = $('#lastname').val() as string;
    if (!lastname || lastname.trim() === '') {
      $('#lastname').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.lastname = lastname;
      $('#lastname').removeClass('is-invalid');
    }

    const email = $('#email').val() as string;
    if (!email || email.trim() === '' || !this.isValidEmail(email)) {
      $('#email').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.email = email;
      $('#email').removeClass('is-invalid');
    }

    const subject = $('#subject').val() as string;
    if (!subject || subject.trim() === '') {
      $('#subject').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.subject = subject;
      $('#subject').removeClass('is-invalid');
    }

    const message = $('#message').val() as string;
    if (!message || message.trim() === '') {
      $('#message').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.message = message;
      $('#message').removeClass('is-invalid');
    }

    return valid;
  }

  isValidEmail(email: string) {
    const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return pattern.test(email);
  }

  isValidMobile(mobile: string) {
    // Adjust the pattern to require a country code (e.g., +1234567890)
    const pattern = /^\+\d{1,4} \d{6,14}$/;
    return pattern.test(mobile);
  }

  submitForm() {
    console.log(this.formD);
    // Add your code to submit the form data to the server or perform any other actions
  }
}