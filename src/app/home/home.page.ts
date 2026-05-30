import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
  IonSpinner, IonList, IonCard, IonItem, IonLabel, IonBadge, IonIcon, IonButtons 
} from '@ionic/angular/standalone';
// Tambahkan 2 baris ini untuk icon
import { addIcons } from 'ionicons';
import { refreshOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
    IonSpinner, IonList, IonCard, IonItem, IonLabel, IonBadge, IonIcon, IonButtons
  ]
})
export class HomePage implements OnInit {
  private http = inject(HttpClient);
  cryptoData: any[] = [];
  isLoading: boolean = false;

  constructor() {
    // Daftarkan icon di sini
    addIcons({ refreshOutline });
  }

  ngOnInit() {
    this.fetchCryptoData();
  }

  fetchCryptoData() {
    this.isLoading = true;
    this.http.get<any>('https://api.coinlore.net/api/tickers/').subscribe({
      next: (response) => {
        this.cryptoData = response.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching crypto:', err);
        this.isLoading = false;
      }
    });
  }
}