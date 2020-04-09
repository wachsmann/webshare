/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

const weatherApp = {
  selectedLocations: {},
  addDialogContainer: document.getElementById('addDialogContainer'),
};

function shareMessage(){
  console.log("fire message")
  if(navigator.vibrate)
  navigator.vibrate([500]);
  const title = document.getElementById("title").value
  const text = document.getElementById("body").value
  
  if(title != "" && text != ""){
    if (navigator.share) {
      navigator.share({
        title,
        text,
        
      }).then(() => {
       
        console.log('sharing!');
      })
      .catch(console.error);
    } else {
      alert("Seu navegador não consegue compartilhar mensagens para outros dispositivos")
    }
  }else{
    alert("Insira um título e uma mensagem para compartilhar")
  }
  
    
  
}


/**
 * Initialize the app, gets the list of locations from local storage, then
 * renders the initial data.
 */
function init() {
  

  // Set up the event handlers for all of the buttons.
  document.getElementById('butShare').addEventListener('click', shareMessage);
  /*
  document.getElementById('butRefresh').addEventListener('click', updateData);
  document.getElementById('butAdd').addEventListener('click', toggleAddDialog);
  document.getElementById('butDialogCancel')
      .addEventListener('click', toggleAddDialog);
  document.getElementById('butDialogAdd')
      .addEventListener('click', addLocation);
      */
}

init();
