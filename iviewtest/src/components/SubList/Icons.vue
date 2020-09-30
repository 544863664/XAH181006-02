<template>
    <div class="icons" style="padding: 0 16px">
        <Row style="padding: 10px 0;">
          <Col span="12">
            <h1 style="display: inline;">Icons</h1> a set of beautiful icons
          </Col>
          <Col span="10" style="height: 42px;line-height: 42px; float: right;text-align: right;padding-right: 10px">
            <Icon type="md-color-palette" />
            <a href="">Home</a>
            >
            <a href="">UI</a>
            >
            <a href="">Icons</a>
          </Col>
        </Row>
        <Row class="icons-wrap" style="">
          <Col span="24" align="left" class="icons-header" style="">Glyphicons</Col>
            <Col v-for="item in icon" span="3" class="icons-col" style="">
              <h1 style="margin-bottom: 10px;">
                <Icon :type="item.icoType" />
              </h1>
              {{item.icoType}}
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Icons",
        data () {
          return {
            icon: [
              {icoType: 'ios-add'},{icoType: 'md-add'},{icoType: 'ios-add-circle'}, {icoType: 'ios-add-circle-outline'},{icoType: 'md-add-circle'},{icoType: 'ios-alarm'},
              {icoType: 'ios-alarm-outline'},{icoType: 'md-alarm'},{icoType: 'ios-albums'}, {icoType: 'ios-albums-outline'},{icoType: 'md-albums'},{icoType: 'ios-alert'},
              {icoType: 'ios-alert-outline'},{icoType: 'md-alert'},{icoType: 'ios-american-football'}, {icoType: 'ios-american-football-outline'},{icoType: 'md-american-football'},{icoType: 'ios-analytics'},
              {icoType: 'ios-analytics-outline'},{icoType: 'md-analytics'},{icoType: 'logo-android'}, {icoType: 'logo-angular'},{icoType: 'ios-aperture'},{icoType: 'ios-aperture-outline'},
              {icoType: 'md-aperture'},{icoType: 'logo-apple'},{icoType: 'ios-apps'}, {icoType: 'ios-apps-outline'},{icoType: 'md-apps'},{icoType: 'ios-appstore'},
              {icoType: 'ios-appstore-outline'},{icoType: 'md-appstore'},{icoType: 'ios-archive'}, {icoType: 'ios-archive-outline'},{icoType: 'md-archive'},{icoType: 'ios-arrow-back'},
              {icoType: 'md-arrow-back'},{icoType: 'ios-arrow-down'},{icoType: 'md-arrow-down'}, {icoType: 'ios-arrow-dropdown'},{icoType: 'md-arrow-dropdown'},{icoType: 'ios-arrow-dropdown-circle'},
              {icoType: 'md-arrow-dropdown-circle'},{icoType: 'ios-arrow-dropleft'},{icoType: 'md-arrow-dropleft'}, {icoType: 'ios-arrow-dropleft-circle'},{icoType: 'md-arrow-dropleft-circle'},{icoType: 'ios-arrow-dropright'},
              {icoType: 'md-arrow-dropright'},{icoType: 'ios-arrow-dropright-circle'},{icoType: 'md-arrow-dropright-circle'}, {icoType: 'ios-arrow-dropup'},{icoType: 'md-arrow-dropup'},{icoType: 'ios-arrow-dropup-circle'},
              {icoType: 'md-arrow-dropup-circle'},{icoType: 'ios-arrow-forward'},{icoType: 'md-arrow-forward'}, {icoType: 'ios-arrow-round-back'},{icoType: 'md-arrow-round-back'},{icoType: 'ios-arrow-round-down'},
              {icoType: 'md-arrow-round-down'},{icoType: 'ios-arrow-round-forward'},{icoType: 'md-arrow-round-forward'}, {icoType: 'ios-arrow-round-up'},{icoType: 'md-arrow-round-up'},{icoType: 'ios-arrow-up'},
              {icoType: 'md-arrow-up'},{icoType: 'ios-at'},{icoType: 'ios-at-outline'}, {icoType: 'md-at'},{icoType: 'ios-attach'},{icoType: 'md-attach'},
              {icoType: 'ios-backspace'},{icoType: 'ios-backspace-outline'},{icoType: 'md-backspace'}, {icoType: 'ios-barcode'},{icoType: 'ios-barcode-outline'},{icoType: 'md-barcode'},
              {icoType: 'ios-baseball'},{icoType: 'ios-baseball-outline'},{icoType: 'md-baseball'}, {icoType: 'ios-basket'},{icoType: 'ios-basket-outline'},{icoType: 'md-basket'},
              {icoType: 'ios-basketball'},{icoType: 'ios-basketball-outline'},{icoType: 'md-basketball'}, {icoType: 'ios-battery-charging'},{icoType: 'md-battery-charging'},{icoType: 'ios-battery-dead'},
              {icoType: 'md-battery-dead'},{icoType: 'ios-battery-full'},{icoType: 'md-battery-full'}, {icoType: 'ios-beaker'},{icoType: 'ios-beaker-outline'},{icoType: 'md-beaker'},
              {icoType: 'ios-beer'},{icoType: 'ios-beer-outline'},{icoType: 'md-beer'}, {icoType: 'ios-bicycle'},{icoType: 'md-bicycle'},{icoType: 'logo-bitcoin'},
              {icoType: 'ios-bluetooth'},{icoType: 'md-bluetooth'},{icoType: 'ios-boat'}, {icoType: 'ios-boat-outline'},{icoType: 'md-boat'},{icoType: 'ios-body'},
              {icoType: 'ios-body-outline'},{icoType: 'md-body'},{icoType: 'ios-bonfire'}, {icoType: 'ios-bonfire-outline'},{icoType: 'md-bonfire'},{icoType: 'ios-book'},
              {icoType: 'ios-book-outline'},{icoType: 'md-book'},{icoType: 'ios-bookmark'}, {icoType: 'ios-bookmark-outline'},{icoType: 'md-bookmark'},{icoType: 'ios-bookmarks'},
              {icoType: 'ios-bookmarks-outline'},{icoType: 'md-bookmarks'},{icoType: 'ios-bowtie'}, {icoType: 'ios-bowtie-outline'},{icoType: 'md-bowtie'},{icoType: 'ios-briefcase'},
              {icoType: 'ios-briefcase-outline'},{icoType: 'md-briefcase'},{icoType: 'ios-browsers'}, {icoType: 'ios-browsers-outline'},{icoType: 'md-browsers'},{icoType: 'ios-brush'},
              {icoType: 'ios-brush-outline'},{icoType: 'md-brush'},{icoType: 'logo-buffer'}, {icoType: 'ios-bug'},{icoType: 'ios-bug-outline'},{icoType: 'md-bug'},
              {icoType: 'ios-build'},{icoType: 'ios-build-outline'},{icoType: 'md-build'}, {icoType: 'ios-bulb'},{icoType: 'ios-bulb-outline'},{icoType: 'md-bulb'},
              {icoType: 'ios-bus'},{icoType: 'ios-bus-outline'},{icoType: 'md-bus'}, {icoType: 'ios-cafe'},{icoType: 'ios-cafe-outline'},{icoType: 'md-cafe'},
              {icoType: 'ios-calculator'},{icoType: 'ios-calculator-outline'}, {icoType: 'md-calculator'}, {icoType: 'ios-calendar'},{icoType: 'ios-calendar-outline'},{icoType: 'md-calendar'},
              {icoType: 'ios-call'},{icoType: 'ios-call-outline'},{icoType: 'md-call'}, {icoType: 'ios-camera'},{icoType: 'ios-camera-outline'},{icoType: 'md-camera'},
              {icoType: 'ios-car'},{icoType: 'ios-car-outline'}, {icoType: 'md-car'}, {icoType: 'ios-card'}, {icoType: 'ios-card-outline'}, {icoType: 'md-card'},
              {icoType: 'ios-cart'}, {icoType: 'ios-cart-outline'}, {icoType: 'md-cart'}, {icoType: 'ios-cash'}, {icoType: 'ios-cash-outline'}, {icoType: 'md-cash'},
              {icoType: 'ios-chatboxes'}, {icoType: 'ios-chatboxes-outline'}, {icoType: 'md-chatboxes'}, {icoType: 'ios-chatbubbles'}, {icoType: 'ios-chatbubbles-outline'}, {icoType: 'md-chatbubbles'},
              {icoType: 'ios-checkbox'}, {icoType: 'ios-checkbox-outline'}, {icoType: 'md-checkbox'}, {icoType: 'md-checkbox-outline'}, {icoType: 'ios-checkmark'}, {icoType: 'md-checkmark'},
              {icoType: 'ios-checkmark-circle'}, {icoType: 'ios-checkmark-circle-outline'}, {icoType: 'md-checkmark-circle'}, {icoType: 'md-checkmark-circle-outline'}, {icoType: 'logo-chrome'}, {icoType: 'ios-clipboard'},
              {icoType: 'ios-clipboard-outline'}, {icoType: 'md-clipboard'}, {icoType: 'ios-clock'}, {icoType: 'ios-clock-outline'}, {icoType: 'md-clock'}, {icoType: 'ios-close'},
              {icoType: 'md-close'}, {icoType: 'ios-close-circle'}, {icoType: 'ios-close-circle-outline'}, {icoType: 'md-close-circle'}, {icoType: 'ios-closed-captioning'}, {icoType: 'ios-closed-captioning-outline'},
              {icoType: 'md-closed-captioning'}, {icoType: 'ios-cloud'}, {icoType: 'ios-cloud-outline'}, {icoType: 'md-cloud'}, {icoType: 'ios-cloud-circle'}, {icoType: 'ios-cloud-circle-outline'},
              {icoType: 'md-cloud-circle'}, {icoType: 'ios-cloud-done'}, {icoType: 'ios-cloud-done-outline'}, {icoType: 'md-cloud-done'}, {icoType: 'ios-cloud-download'}, {icoType: 'ios-cloud-download-outline'},
              {icoType: 'md-cloud-download'}, {icoType: 'md-cloud-outline'}, {icoType: 'ios-cloud-upload'}, {icoType: 'ios-cloud-upload-outline'}, {icoType: 'md-cloud-upload'}, {icoType: 'ios-cloudy'},
              {icoType: 'ios-cloudy-outline'}, {icoType: 'md-cloudy'}, {icoType: 'ios-cloudy-night'}, {icoType: 'ios-cloudy-night-outline'}, {icoType: 'md-cloudy-night'}, {icoType: 'ios-code'},
              {icoType: 'md-code'}, {icoType: 'ios-code-download'}, {icoType: 'ios-code-download'}, {icoType: 'ios-code-working'}, {icoType: 'md-code-working'}, {icoType: 'logo-codepen'},
              {icoType: 'ios-cog'}, {icoType: 'ios-cog-outline'}, {icoType: 'md-cog'}, {icoType: 'ios-color-fill'}, {icoType: 'ios-color-fill-outline'}, {icoType: 'md-color-fill'},
              {icoType: 'ios-color-filter'}, {icoType: 'ios-color-filter-outline'}, {icoType: 'md-color-filter'}, {icoType: 'ios-color-palette'}, {icoType: 'ios-color-palette-outline'}, {icoType: 'md-color-palette'},
              {icoType: 'ios-color-wand'}, {icoType: 'ios-color-wand-outline'}, {icoType: 'md-color-wand'}, {icoType: 'ios-compass'}, {icoType: 'ios-compass-outline'}, {icoType: 'md-compass'},
              {icoType: 'md-compass'}, {icoType: 'ios-construct-outline'}, {icoType: 'md-construct'}, {icoType: 'ios-contact'}, {icoType: 'ios-contact-outline'}, {icoType: 'md-contact'},
              {icoType: 'ios-contacts'}, {icoType: 'ios-contacts-outline'}, {icoType: 'md-contacts'}, {icoType: 'ios-contract'}, {icoType: 'md-contract'}, {icoType: 'ios-contrast'},
              {icoType: 'md-contrast'}, {icoType: 'ios-copy'}, {icoType: 'ios-copy-outline'}, {icoType: 'md-copy'}, {icoType: 'ios-create'}, {icoType: 'ios-create-outline'},
              {icoType: 'md-create'}, {icoType: 'ios-crop'}, {icoType: 'ios-crop-outline'}, {icoType: 'md-crop'}, {icoType: 'logo-css3'}, {icoType: 'ios-cube'},
              {icoType: 'ios-cube-outline'}, {icoType: 'md-cube'}, {icoType: 'ios-cut'}, {icoType: 'ios-cut-outline'}, {icoType: 'md-cut'}, {icoType: 'logo-designernews'},
              {icoType: 'ios-desktop'}, {icoType: 'ios-desktop-outline'}, {icoType: 'md-desktop'}, {icoType: 'ios-disc'}, {icoType: 'ios-disc-outline'}, {icoType: 'md-disc'},
              {icoType: 'ios-document'}, {icoType: 'ios-document-outline'}, {icoType: 'md-document'}, {icoType: 'ios-done-all'}, {icoType: 'md-done-all'}, {icoType: 'ios-download'},
              {icoType: 'ios-download-outline'}, {icoType: 'md-download'}, {icoType: 'logo-dribbble'}, {icoType: 'logo-dropbox'}, {icoType: 'ios-easel'}, {icoType: 'ios-easel-outline'},
              {icoType: 'md-easel'}, {icoType: 'ios-egg'}, {icoType: 'ios-egg-outline'}, {icoType: 'md-egg'}, {icoType: 'logo-euro'}, {icoType: 'ios-exit'},
              {icoType: 'ios-exit-outline'}, {icoType: 'md-exit'}, {icoType: 'ios-expand'}, {icoType: 'md-expand'}, {icoType: 'ios-eye'}, {icoType: 'ios-eye-outline'},
              {icoType: 'ios-finger-print'}, {icoType: 'md-finger-print'}, {icoType: 'md-finger-print'}, {icoType: 'ios-flag-outline'}, {icoType: 'md-flag'}, {icoType: 'ios-flame'},
              {icoType: 'ios-flame-outline'}, {icoType: 'md-flame'}, {icoType: 'ios-skip-backward'}, {icoType: 'ios-skip-backward-outline'}, {icoType: 'md-skip-backward'}, {icoType: 'ios-skip-forward'},
              {icoType: 'ios-skip-forward-outline'}, {icoType: 'md-skip-forward'}, {icoType: 'logo-skype'}, {icoType: 'logo-snapchat'}, {icoType: 'ios-snow'}, {icoType: 'ios-snow-outline'},
              {icoType: 'md-snow'}, {icoType: 'ios-speedometer'}, {icoType: 'ios-speedometer-outline'}, {icoType: 'md-speedometer'}, {icoType: 'ios-square'}, {icoType: 'ios-square-outline'},
              {icoType: 'md-square'}, {icoType: 'md-square-outline'}, {icoType: 'ios-star'}, {icoType: 'ios-star-outline'}, {icoType: 'md-star'}, {icoType: 'ios-star-half'},
              {icoType: 'md-star-half'}, {icoType: 'md-star-half'}, {icoType: 'ios-tablet-landscape'}, {icoType: 'md-tablet-landscape'}, {icoType: 'ios-tablet-portrait'}, {icoType: 'md-tablet-portrait'},
              {icoType: 'ios-transgender'}, {icoType: 'md-transgender'}, {icoType: 'ios-trophy'}, {icoType: 'ios-trophy-outline'}, {icoType: 'md-trophy'}, {icoType: 'ios-unlock'},
              {icoType: 'ios-unlock-outline'}, {icoType: 'md-unlock'}, {icoType: 'logo-usd'}, {icoType: 'ios-videocam'}, {icoType: 'ios-water'}, {icoType: 'ios-water-outline'},
              {icoType: 'md-water'}, {icoType: 'logo-whatsapp'}, {icoType: 'ios-wifi'}, {icoType: 'ios-wifi-outline'}, {icoType: 'md-wifi'}, {icoType: 'logo-windows'},
              {icoType: 'ios-wine'}, {icoType: 'ios-wine-outline'}, {icoType: 'md-wine'}, {icoType: 'ios-woman'}, {icoType: 'ios-woman-outline'}, {icoType: 'md-woman'},
              {icoType: 'logo-wordpress'}, {icoType: 'logo-xbox'}, {icoType: 'logo-vimeo'}, {icoType: 'logo-rss'}
            ]
          }
        }
    }
</script>

<style scoped>
  .icons-header {
    padding-bottom: 8px;
    font-size: 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .icons-wrap {
    background: #fff;
    text-align: center;
    padding: 10px;
  }
  .icons-col {
    height: 100px;
    border: 1px solid #eee;
    padding: 10px;
  }
  .icons-col:hover {
    background: #563d7c1a;
  }
</style>
