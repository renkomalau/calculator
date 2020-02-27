import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title='Rengko Panusunan Malau';
  nama='Rengko Panusunan Malau';
  kelas='IF 4 Batamindo';
  nim='3311811031';
  prodi='Teknik Informatika'
  spp='5500000';
  a=7;
  b=2;
  c=this.a+this.b;
  
  angka1;
  angka2;
  hasil=0;
  constructor() {}

  kali(){
    this.hasil = this.angka1*this.angka2

  }
  kurang(){
    this.hasil = this.angka1-this.angka2

  }
  tambah(){
    this.hasil = this.angka1+this.angka2

  }
  bagi(){
    this.hasil = this.angka1/this.angka2

  }

}
