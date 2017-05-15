import { Component } from "@angular/core";
import { N9LoadingModalService } from "./n9-loading-modal.service";

@Component({
  selector: 'n9-loading-modal',
  template: `
		<div class="container" [ngClass]="{ 'loading': loader.loading }">
			<div class="backdrop"></div>
			<ion-spinner name="dots"></ion-spinner>
		</div>
	`,
  styleUrls: [
    'n9-loading-modal.scss'
  ]
})
export class N9LoadingModalComponent {
  public loader: any;

  constructor(private loadingModalService: N9LoadingModalService) {
    this.loader = loadingModalService.loader;
  }
}
