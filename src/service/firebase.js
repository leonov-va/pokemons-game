import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAmElUFh4Tqf816HUxrV9SscymtGXtUlyE",
  authDomain: "pokemon-app-aa811.firebaseapp.com",
  databaseURL: "https://pokemon-app-aa811-default-rtdb.firebaseio.com",
  projectId: "pokemon-app-aa811",
  storageBucket: "pokemon-app-aa811.appspot.com",
  messagingSenderId: "300498947262",
  appId: "1:300498947262:web:e97a5c0138a12477d2a2ef"
};

firebase.initializeApp(firebaseConfig)

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
  }
}

export default Firebase;