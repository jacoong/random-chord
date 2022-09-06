const first_page = document.querySelector(".header-page__Auto-Mode");
const main_page = document.querySelector(".main-page");
const add = document.querySelector(".settings-page__container_title__add-chord");

const codename = document.querySelector(".code_name");
const formname = document.querySelector(".form_name");
const precodename = document.querySelector(".pre_code_name");
const preformname = document.querySelector(".pre_form_name");
const container = document.querySelector(".settings-page__container:nth-child(2)");
const container_notes =document.querySelectorAll(".settings-page__container-codes");
const container_codes =document.querySelectorAll(".settings-page__container-codes");
const setting_icon = document.querySelector(".setting-icon");
const settings_page = document.querySelector(".settings-page");
const back_icon = document.querySelector(".back-icon");


const HIDDEN = "hidden";
const KEY ="satkey";


let piano_codes_storage = [];

const piano_Notes_active = [{display:'C',sounds:'C',id:Date.now()},
{display:'Db',sounds:'D Flat',id:Date.now()},
{display:'D',sounds:'D',id:Date.now()},
{display:'Eb',sounds:'E Flat',id:Date.now()},
{display:'E',sounds:'E',id:Date.now()},
{display:'F',sounds:'F',id:Date.now()},
{display:'Gb',sounds:'G Flat',id:Date.now()},
{display:'G',sounds:'G',id:Date.now()},
{display:'Ab',sounds:'Ae Flat',id:Date.now()},
{display:'A',sounds:'Ae',id:Date.now()},
{display:'Bb',sounds:'B Flat',id:Date.now()},
{display:'B',sounds:'B',id:Date.now()},
{display:'C#',sounds:'C sharp',id:Date.now()},
{display:'D#',sounds:'D sharp',id:Date.now()},
{display:'F#',sounds:'F sharp',id:Date.now()},
{display:'G#',sounds:'G sharp',id:Date.now()},
{display:'A#',sounds:'Ae sharp',id:Date.now()},
];
const piano_Notes_unactive = [];

const piano_Chords_active = [
    {display:'Maj7',sounds:'Major seven',id:Date.now()},
    {display:'min7',sounds:'Minor seven',id:Date.now()},
    {display:'7',sounds:'seven',id:Date.now()}];

const piano_Chords_unactive = [];

const piano_form_active = [{display:'A form'},{display:'B form'}];

const piano_form_unactive = [];

let precodes = [-1,-1,-1];






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
        let active_index = piano_Notes_active.findIndex(i => i.display ==(`${selected_notes.innerText}`));

        if (active_index === -1){
            active_index = piano_Chords_active.findIndex(i => i.display ==(`${selected_notes.innerText}`));
            if (active_index === -1){
                active_index = piano_form_active.findIndex(i => i.display ==(`${selected_notes.innerText}`));
                piano_form_unactive.push(piano_form_active[active_index]);
                piano_form_active.splice(active_index,1);
                console.log(piano_form_active);
                console.log(piano_form_unactive)
                return };

            piano_Chords_unactive.push(piano_Chords_active[active_index]);
            piano_Chords_active.splice(active_index,1);
            console.log(piano_Chords_active);
            console.log(piano_Chords_unactive);


        }
        else{
        piano_Notes_unactive.push(piano_Notes_active[active_index]);
        piano_Notes_active.splice(active_index,1);
        console.log(piano_Notes_active);
        console.log(piano_Notes_unactive);}



    }else{
        let unactive_index = piano_Notes_unactive.findIndex(i => i.display ==(`${selected_notes.innerText}`));
            
            if (unactive_index === -1){
                unactive_index = piano_Chords_unactive.findIndex(i => i.display ==(`${selected_notes.innerText}`));
                if (unactive_index === -1){
                    unactive_index = piano_form_unactive.findIndex(i => i.display ==(`${selected_notes.innerText}`));
                    piano_form_active.push(piano_form_unactive[unactive_index]);
                    piano_form_unactive.splice(unactive_index,1);
                    console.log(piano_form_active);
                    console.log(piano_form_unactive)
                    return };

                piano_Chords_active.push(piano_Chords_unactive[unactive_index]);
                piano_Chords_unactive.splice(unactive_index,1);
                console.log(piano_Chords_active);
                console.log(piano_Chords_unactive);


             }else{

             piano_Notes_active.push(piano_Notes_unactive[unactive_index]);
             piano_Notes_unactive.splice(unactive_index,1);
             console.log(piano_Notes_active);
             console.log(piano_Notes_unactive)
            }}

        };

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

    piano_Chords_active.push(
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
    const container_codes_div = document.createElement("div");
    container_codes_div.classList.add("settings-page__container-codes");
    container_codes_div.classList.add("activee");
    

    container_codes_div.innerText =`${code_value.display}`;
    container.appendChild(container_codes_div);
    container_codes_div.addEventListener("click",active);

}


function start(){
    console.log("Sdfs");
    const inputString = prompt('BPM을 입력하세요 기본값: 40 bpm');
    let bpm =  60000 / parseInt(inputString);


    if (inputString === null | inputString === ""){
        alert("값을 입력하시죠?? ^^")
        return}

    first_page.classList.add(HIDDEN);
    main_page.classList.remove(HIDDEN);
    back_icon.classList.remove(HIDDEN);

    
    
    prechangetext();
    setInterval(prechangetext, bpm);
    setInterval(changetext, bpm);
    setInterval(click, bpm);

  


    }


    
function prechangetext(){
    const prepicknotesnumber = Math.floor(Math.random()*piano_Notes_active.length);
    const prepickcchordsnumber = Math.floor(Math.random()*piano_Chords_active.length);
    const prepickform = Math.floor(Math.random()*piano_form_active.length);
    precodename.innerText = (`${piano_Notes_active[prepicknotesnumber].display}${piano_Chords_active[prepickcchordsnumber].display}`);
    preformname.innerText = (`${piano_form_active[prepickform].display}`);
    precodes.push(prepicknotesnumber,prepickcchordsnumber,prepickform);
    console.log(prepicknotesnumber,prepickcchordsnumber,prepickform);
    console.log(precodes);

}

function changetext(){

    const picknotesnumber = precodes[precodes.length-6];
    const pickcchordsnumber = precodes[precodes.length-5];
    const pickform = precodes[precodes.length-4];
    console.log(picknotesnumber);
    console.log(pickcchordsnumber);
    console.log(pickform);
 

    codename.innerText = (`${piano_Notes_active[picknotesnumber].display}${piano_Chords_active[pickcchordsnumber].display}`);
    txtInput.value = (`${piano_Notes_active[picknotesnumber].sounds} ${piano_Chords_active[pickcchordsnumber].sounds}`);
    formname.innerText = (`${piano_form_active[pickform].display}`);

    if (precodes.length >100){
        precodes = precodes.slice(50);
    }


}




function click(){
    btnSpeak.click();
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
};





