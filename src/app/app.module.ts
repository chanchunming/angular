import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavComponent } from './nav/nav.component';
import { NestedrouteComponent } from './nestedroute/nestedroute.component';
import { FirstnestedrouteComponent } from './nestedroute/firstnestedroute/firstnestedroute.component';
import { SecondnestedrouteComponent } from './nestedroute/secondnestedroute/secondnestedroute.component';
import { ThirdnestedrouteComponent } from './nestedroute/thirdnestedroute/thirdnestedroute.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'nestedroute',
        component: NestedrouteComponent,
        children: [
          { path: 'firstnestedroute', component: FirstnestedrouteComponent },
          { path: 'secondnestedroute', component: SecondnestedrouteComponent },
          { path: 'thirdnestedroute', component: ThirdnestedrouteComponent },
          { path: '**', redirectTo: 'firstnestedroute' }
        ]
      },
      { path: '**', redirectTo: 'nestedroute' }
    ])
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    NavComponent,
    NestedrouteComponent,
    FirstnestedrouteComponent,
    SecondnestedrouteComponent,
    ThirdnestedrouteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
