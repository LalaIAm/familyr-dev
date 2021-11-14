const config = {
  apiKey: 'AIzaSyDKZ8_kYjLXWWXsVz6vf-YRZVez6b7c_2Y',
  authDomain: 'familyr.firebaseapp.com',
  projectId: 'familyr',
  storageBucket: 'familyr.appspot.com',
  messagingSenderId: '1091820815421',
  appId: '1:1091820815421:web:5c448578ab739c8a4e1654',
  measurementId: 'G-XNMMKV4KKT',
}

export function getFirebaseConfig(){
    if(!config || !config.apiKey){
        throw new Error('Add firebase config!')
    } else {
        return config;
    }
}