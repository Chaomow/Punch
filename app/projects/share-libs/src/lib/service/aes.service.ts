import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

/**
 * 加/解密
 */
@Injectable({
  providedIn: 'root',
})
export class AesService {
  /**
   *  key - 加解密只能為字串
   */
  private k = '1q2w3e4r5t6y7u8i';

  /**
   * 設定加解密鑰匙
   */
  set sk(value: string) {
    this.k = value;
  }

  /**
   * aes 加密
   *
   * @param value 傳入的資料
   * @returns 回傳加密過的字串
   */
  aesEnc(value: string): string {
    const sk = CryptoJS.enc.Utf8.parse(this.k);
    const aesEnc = CryptoJS.AES.encrypt(value, sk, {
      keySize: 128 / 32,
      mode: CryptoJS.mode.ECB,
    }).toString();
    const outputValue = CryptoJS.enc.Base64.parse(aesEnc).toString(
      CryptoJS.enc.Hex
    );
    return outputValue;
  }

  /**
   * aes 解密
   *
   * @param value 傳入的資料
   * @returns 回傳解密過的字串
   */
  aesDec(value: string) {
    const sk = CryptoJS.enc.Utf8.parse(this.k);
    const inputValue = CryptoJS.enc.Hex.parse(value).toString(
      CryptoJS.enc.Base64
    );
    const aesDec = CryptoJS.AES.decrypt(inputValue, sk, {
      keySize: 128 / 32,
      mode: CryptoJS.mode.ECB,
    });
    const outputValue = aesDec.toString(CryptoJS.enc.Utf8);
    return outputValue;
  }
}
