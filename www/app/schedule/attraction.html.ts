module attraction { export var html = '<ion-view class="attraction-view">  <ion-nav-buttons side="right"><a ng-click="shareAttraction(attraction)" class="button button-icon icon ion-share share-attraction"></a></ion-nav-buttons>  <ion-nav-title><span>{{attraction.type}}</span></ion-nav-title>  <ion-content>    <ion-slide-box ng-show="attraction.speakers.length &gt; 1" auto-play="true" does-continue="true">      <ion-slide ng-repeat="speaker in attraction.speakers">        <div style="width:100vw; overflow:hidden;"><img ng-src="{{speaker.image}}" class="speaker-image"/></div>      </ion-slide>    </ion-slide-box><img ng-show="attraction.speakers.length == 1" ng-src="{{attraction.speakers[0].image}}" class="speaker-image"/>    <div class="attraction-details"><span ng-bind-html="attraction.title" class="attraction-title"></span><span ng-show="attraction.speakers" class="attraction-speakers">By<span ng-repeat="speaker in attraction.speakers" class="attraction-speaker">{{speaker.name}}<span class="attraction-speaker-concat">{{$last ? &#39;&#39; : &#39; &#38; &#39;}}</span></span></span></div>    <div class="attraction-description">      <p ng-bind-html="attraction.description"></p>    </div>  </ion-content></ion-view>';}