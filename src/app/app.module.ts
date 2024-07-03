import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuoteComponent } from './quote/quote.component';
import { SimpleComponent } from './simple/simple.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FeaturesComponent } from './features/features.component';
import { TermsComponent } from './terms/terms.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent, // Declare your AppComponent here
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    QuoteComponent,
    SimpleComponent,
    ContactComponent,
    TeamComponent,
    TestimonialComponent,
    FeaturesComponent,
    TermsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule // Import SharedModule here
  ],

  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
