import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { HomeComponent } from './views/home/home.component';
import { AiPromptComponent } from './views/ai-prompt/ai-prompt.component';
import { PlaySettingsComponent } from './views/play-settings/play-settings.component';
import { PlayComponent } from './views/play/play.component';
import { WordleListComponent } from './views/wordle-list/wordle-list.component';
import { FindUserComponent } from './views/find-user/find-user.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SocialMediaBlockComponent } from './components/social-media-block/social-media-block.component';
import { EndGameModalComponent } from './overlays/end-game-modal/end-game-modal.component';
import { ShareWordleModalComponent } from './overlays/share-wordle-modal/share-wordle-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    HomeComponent,
    AiPromptComponent,
    PlaySettingsComponent,
    PlayComponent,
    WordleListComponent,
    FindUserComponent,
    ProfileComponent,
    SocialMediaBlockComponent,
    EndGameModalComponent,
    ShareWordleModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
