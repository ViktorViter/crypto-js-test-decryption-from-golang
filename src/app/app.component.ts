import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

declare const Buffer;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  encode() {
    let keyString = 'w9z$C&F)J@McQfTj';
    const data =
      'lT9ExhKU0YQYHU9F15Opkq5ir4G2fq37mYEUxMs8XmEkbm2x55fswRLqv1W8Wwur';

    var byteArray = new Buffer(data, 'base64');

    const iv = byteArray.slice(0, 16);
    const ct = byteArray.slice(16).toString();
    // const key = CryptoJS.enc.Utf8.parse(keyS)
    console.log('arr: ' + byteArray.length);
    console.log('IV: ' + iv.length);
    console.log('CT: ' + ct.length);

    const bytes = CryptoJS.AES.decrypt(ct, keyString, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    console.log('Result : ' + bytes.toString(CryptoJS.enc.Base64));

    // WORK SIMPLE BASIC EXAMPLE FOR VICTOR

    // let data = 'Taras';
    // let keyString = 'w9z$C&F)J@McQfTj';
    // // Encrypt
    // var ciphertext = CryptoJS.AES.encrypt(data, keyString).toString();
    // console.log(ciphertext);

    // // Decrypt
    // var bytes = CryptoJS.AES.decrypt(ciphertext, keyString);
    // var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    // console.log(decryptedData);
  }
}
