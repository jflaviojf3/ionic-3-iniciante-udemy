import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public object_feed = {
    titulo: "JFlavio in Json",
    data: "07 de outubro de 2018",
    descricao: "Nossa, essa é a minha primeira tela de App, no ionic 3. Que Show! o/.",
    qtd_likes: 12,
    qtd_commets: 4,
    hora_commets: "10h ago"
  };

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any );
        const object_retorno = JSON.parse(response._body);
        this.lista_filmes = object_retorno.results;
        console.log(object_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
