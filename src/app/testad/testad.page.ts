import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-testad',
  templateUrl: './testad.page.html',
  styleUrls: ['./testad.page.scss'],
})
export class TestadPage implements OnInit {

  constructor(public admob: AdMobFree) { }

  showBanner() {

    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true
        //id: Your Ad Unit ID goes here
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
        // success
    }).catch(e => console.log(e));

}


  ngOnInit() {
  }

}
