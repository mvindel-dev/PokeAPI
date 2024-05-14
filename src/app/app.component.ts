import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    this.scan();
    
    
  }

  async scan(){
    const { available } = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    
    if(!available){
      await BarcodeScanner.installGoogleBarcodeScannerModule();
      const { barcodes } = await BarcodeScanner.scan();
    }
  }
}
