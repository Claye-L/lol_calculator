import { Component, OnInit } from '@angular/core';
import { DDragon, RiotAPITypes } from '@fightmegg/riot-api';


@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit {

  ddragon: DDragon;
  champs: RiotAPITypes.DDragon.DDragonChampionListDTO;
  constructor() { 
    this.ddragon = new DDragon();
  }

  async ngOnInit(){
    this.champs = await this.ddragon.champion.all();
    console.log(this.champs);
  }

}
