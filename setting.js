const first_page = document.querySelector(".header-page__Auto-Mode");
const main_page = document.querySelector(".main-page");
const add = document.querySelector(".settings-page__container_title__add-chord");

const codename = document.querySelector(".code_name");
const container = document.querySelector(".settings-page__container:nth-child(2)");
const container_codes = document.createElement("div");
const container_notes =document.querySelectorAll(".settings-page__container-codes");
const setting_icon = document.querySelector(".setting-icon");
const settings_page = document.querySelector(".settings-page");
const back_icon = document.querySelector(".back-icon");


const HIDDEN = "hidden";
const KEY ="satkey";



let piano_codes_storage = [];

const piano_codes_active = [{display:'C',sounds:'C',id:Date.now()},
{display:'Db',sounds:'C',id:Date.now()},
{display:'D',sounds:'D Flat',id:Date.now()},
{display:'Eb',sounds:'E Flat',id:Date.now()},
{display:'E',sounds:'E',id:Date.now()},
{display:'F',sounds:'F',id:Date.now()},
{display:'Gb',sounds:'G Flat',id:Date.now()},
{display:'G',sounds:'G',id:Date.now()},
{display:'Ab',sounds:'A Flat',id:Date.now()},
{display:'A',sounds:'A',id:Date.now()},
{display:'Bb',sounds:'B Flat',id:Date.now()},
{display:'B',sounds:'B',id:Date.now()},
{display:'Maj7',sounds:'Major seven',id:Date.now()},
{display:'min7',sounds:'Minor seven',id:Date.now()},
{display:'7',sounds:'seven',id:Date.now()},
];

const piano_codes_unactive = []








container_notes.forEach(function(event){
    event.addEventListener("click",active);
});


function savechords(){
    localStorage.setItem(KEY,JSON.stringify(piano_codes_storage));
}


function active(event){
    const selected_notes =(event.target);
    selected_notes.classList.toggle("activee");
    if (!selected_notes.classList.contains("activee")){
        let active_index = piano_codes_active.findIndex(i => i.display ==(`${selected_notes.innerText}`));

        piano_codes_unactive.push(piano_codes_active[active_index]);
        piano_codes_active.splice(active_index,1);
        console.log(piano_codes_active);
        console.log(piano_codes_unactive);


    }else{
        let unactive_index = piano_codes_unactive.findIndex(i => i.display ==(`${selected_notes.innerText}`));
        piano_codes_active.push(piano_codes_unactive[unactive_index]);
        piano_codes_unactive.splice(unactive_index,1);
        console.log(piano_codes_active);
        console.log(piano_codes_unactive);
        }
    }

function get_new_chords(){
    let ChordsDisplay = prompt('Chords을 입력하세요');

    if (ChordsDisplay === null | ChordsDisplay === ""){
        alert("값을 입력하시죠?? ^^")
        return}
    else{
        ChordsDisplay
    }

    let ChordsSounds = prompt("[선택] 해당 단어가 나올때 듣고 싶은 소리의 문자를 대로 입력하세요. 입력하지 않을시, 해당 단어는 문자 그대로 소리납니다.");
    if (ChordsSounds === null | ChordsSounds === ""){
        ChordsSounds = ChordsDisplay;
    }else{
        ChordsSounds;
    }

    const code_value = {display:`${ChordsDisplay}`,sounds:`${ChordsSounds}`,id:Date.now()};

    piano_codes_active.push(
        {display:`${ChordsDisplay}`,sounds:`${ChordsSounds}`,id:Date.now()}
    );

    piano_codes_storage.push(
        {display:`${ChordsDisplay}`,sounds:`${ChordsSounds}`,id:Date.now()}
    );

    savechords();
    paint_Chords(code_value);
  
    
}



function paint_Chords(code_value){
    console.log("sdf");
    const container = document.querySelector(".settings-page .settings-page__container__group:nth-child(3) .settings-page__container");
    const container_codes = document.createElement("div");
    container_codes.classList.add("settings-page__container-codes");
    container_codes.classList.add("activee");
    

    container_codes.innerText =`${code_value.display}`;
    container.appendChild(container_codes);
    container_codes.addEventListener("click",active);

}


function start(){
    console.log("Sdfs");
    const inputString = prompt('BPM을 입력하세요 기본값: 40 bpm');
    let bpm =  60000 / parseInt(inputString);

    if (bpm == NaN) {
        bpm = 750;}
    if (inputString === null | inputString === ""){
        alert("값을 입력하시죠?? ^^")
        return}

    first_page.classList.add(HIDDEN);
    main_page.classList.remove(HIDDEN);
    back_icon.classList.remove(HIDDEN);

    setInterval(changetext, bpm);
    setInterval(click, bpm);
 





    }


function changetext(){

    const picknumber = Math.floor(Math.random()*piano_codes_active.length);
    codename.innerText = (`${piano_codes_active[picknumber].display}`);
    txtInput.value = (`${piano_codes_active[picknumber].sounds}`);
}



function click(){
    btnSpeak.click();
    console.log("ss");
}


function lord_setting_page(){
    settings_page.classList.toggle(HIDDEN);
    first_page.classList.add(HIDDEN);
    back_icon.classList.remove(HIDDEN);
    if (main_page.classList.contains(HIDDEN)){
        setting_icon.classList.add(HIDDEN);
    }

}

function lord_first_page(){
    console.log("dsf");
    back_icon.classList.add(HIDDEN);
    settings_page.classList.add(HIDDEN);
    first_page.classList.remove(HIDDEN);
    main_page.classList.add(HIDDEN);
    if ((!main_page.classList.contains(HIDDEN))|!first_page.classList.contains(HIDDEN)){
        setting_icon.classList.remove(HIDDEN);
    }


}
first_page.addEventListener("click",start);
add.addEventListener("click",get_new_chords);
setting_icon.addEventListener("click",lord_setting_page);
back_icon.addEventListener("click",lord_first_page);


const getsavechords = localStorage.getItem(KEY);
if (getsavechords !== null){
    const parasavechords = JSON.parse(getsavechords);
    piano_codes_storage = parasavechords;
    parasavechords.forEach((item) => paint_Chords(item)   
    );


}