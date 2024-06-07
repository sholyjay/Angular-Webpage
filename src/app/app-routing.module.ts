import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'simple', component: SimpleComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'team', component: TeamComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'features', component: FeaturesComponent },
    { path: '', component: HomeComponent},
    { path: '**',  component: SimpleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }