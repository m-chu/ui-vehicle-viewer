import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Component Modules
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatChipsModule,
  MatSidenavModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material Modules
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatTooltipModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
