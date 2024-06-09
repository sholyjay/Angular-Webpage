import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements AfterViewInit {

  formD = {
    name: '',
    email: '',
    mobile: '',
    message: '',
    service: ''
  };

  constructor() { }

  ngAfterViewInit() {
    $('#quoteSubmitBtn').on('click', (e: JQuery.Event) => {
      e.preventDefault();
      if (this.validateQuoteForm()) {
        this.submitQuoteForm();
      }
    });
  }

  validateQuoteForm(): boolean {
    let valid = true;

    // Validate name
    const name = $('#quoteName').val() as string;
    if (!name || name.trim() === '') {
      $('#quoteName').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.name = name;
      $('#quoteName').removeClass('is-invalid');
    }

    // Validate email
    const email = $('#quoteEmail').val() as string;
    if (!email || email.trim() === '' || !this.isValidEmail(email)) {
      $('#quoteEmail').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.email = email;
      $('#quoteEmail').removeClass('is-invalid');
    }

    // Validate mobile
    const mobile = $('#quoteMobile').val() as string;
    if (!mobile || mobile.trim() === '' || !this.isValidMobile(mobile)) {
      $('#quoteMobile').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.mobile = mobile;
      $('#quoteMobile').removeClass('is-invalid');
    }

    // Validate message
    const message = $('#quoteMessage').val() as string;
    if (!message || message.trim() === '') {
      $('#quoteMessage').addClass('is-invalid');
      valid = false;
    } else {
      this.formD.message = message;
      $('#quoteMessage').removeClass('is-invalid');
    }

    // Validate service
    const service = $('#service').val() as string;
    this.formD.service = service;

    return valid;
  }

  isValidEmail(email: string): boolean {
    const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return pattern.test(email);
  }

  isValidMobile(mobile: string): boolean {
    // Add country code validation logic here if needed
    const pattern = /^[+][0-9]{10,14}$/; // Adjust regex according to your requirements
    return pattern.test(mobile);
  }

  submitQuoteForm() {
    console.log(this.formD);
    // Add your submission logic here
  }
}
