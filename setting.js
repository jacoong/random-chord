const first_page = document.querySelector(".header-page__Auto-Mode");
const main_page = document.querySelector(".main-page");
const add = document.querySelector(".settings-page__container_title__add-chord");
const remove = document.querySelector(".settings-page__container_title__remove-chord");


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
const KEY1 ="satkey";
const KEY2 ="keepactive";


let piano_codes_storage = [];
let active_codes_storage = [];

const whole = [{display:'C',sounds:'C',type:'Notes'},
{display:'Db',sounds:'D Flat',type:'Notes'},
{display:'D',sounds:'D',type:'Notes'},
{display:'Eb',sounds:'E Flat',type:'Notes'},
{display:'E',sounds:'E',type:'Notes'},
{display:'F',sounds:'F',type:'Notes'},
{display:'Gb',sounds:'G Flat',type:'Notes'},
{display:'G',sounds:'G',type:'Notes'},
{display:'Ab',sounds:'Ae Flat',type:'Notes'},
{display:'A',sounds:'Ae',type:'Notes'},
{display:'Bb',sounds:'B Flat',type:'Notes'},
{display:'B',sounds:'B',type:'Notes'},
{display:'C#',sounds:'C sharp',type:'Notes'},
{display:'D#',sounds:'D sharp',type:'Notes'},
{display:'F#',sounds:'F sharp',type:'Notes'},
{display:'G#',sounds:'G sharp',type:'Notes'},
{display:'A#',sounds:'Ae sharp',type:'Notes'},
{display:'Maj7',sounds:'Major seven',type:'Chords'},
{display:'min7',sounds:'Minor seven',type:'Chords'},
{display:'7',sounds:'seven',type:'Chords'},
{display:'A form',type:'Form'},{display:'B form',type:'Form'}];


const piano_Notes_active = [{display:'C',sounds:'C',type:'Notes'},
{display:'Db',sounds:'D Flat',type:'Notes'},
{display:'D',sounds:'D',type:'Notes'},
{display:'Eb',sounds:'E Flat',type:'Notes'},
{display:'E',sounds:'E',type:'Notes'},
{display:'F',sounds:'F',type:'Notes'},
{display:'Gb',sounds:'G Flat',type:'Notes'},
{display:'G',sounds:'G',type:'Notes'},
{display:'Ab',sounds:'Ae Flat',type:'Notes'},
{display:'A',sounds:'Ae',type:'Notes'},
{display:'Bb',sounds:'B Flat',type:'Notes'},
{display:'B',sounds:'B',type:'Notes'},
{display:'C#',sounds:'C sharp',type:'Notes'},
{display:'D#',sounds:'D sharp',type:'Notes'},
{display:'F#',sounds:'F sharp',type:'Notes'},
{display:'G#',sounds:'G sharp',type:'Notes'},
{display:'A#',sounds:'Ae sharp',type:'Notes'},
];

const piano_Notes_unactive = [];


let piano_Chords_active = [
    {display:'Maj7',sounds:'Major seven',type:'Chords'},
    {display:'min7',sounds:'Minor seven',type:'Chords'},
    {display:'7',sounds:'seven',type:'Chords'}];

let piano_Chords_unactive = [];


const piano_form_active = [{display:'A form',type:'Form'},{display:'B form',type:'Form'}];

const piano_form_unactive = [];

let precodes = [-1,-1,-1];
 





container_notes.forEach(function(event){
    event.addEventListener("click",active);
});


function savechords(){
    localStorage.setItem(KEY1,JSON.stringify(piano_codes_storage));
}

function save_active(){
    localStorage.setItem(KEY2,JSON.stringify(active_codes_storage));
    console.log("complete");
}


function active(event){
    let selected_notes =(event.target);
    selected_notes.classList.toggle("activee");
        if (!selected_notes.classList.contains("activee")){
            let active_index = piano_Notes_active.findIndex(i => i.display ==(`${selected_notes.innerText}`));
            

            if (active_index === -1){
                active_index = piano_Chords_active.findIndex(i => i.display ==(`${selected_notes.innerText}`));
                console.log(active_index);
                if (active_index === -1){
                    active_index = piano_form_active.findIndex(i => i.display ==(`${selected_notes.innerText}`));

                    piano_form_unactive.push(piano_form_active[active_index]);
                    piano_form_active.splice(active_index,1);
                    active_codes_storage = piano_form_unactive.concat(piano_Chords_unactive).concat(piano_Notes_unactive);


                    console.log(piano_form_active);
                    console.log(piano_form_unactive);
                    console.log(active_codes_storage);
                    save_active();
                     return };

                piano_Chords_unactive.push(piano_Chords_active[active_index]);
                piano_Chords_active.splice(active_index,1);
                active_codes_storage = piano_form_unactive.concat(piano_Chords_unactive).concat(piano_Notes_unactive);


                console.log(piano_Chords_active);
                console.log(piano_Chords_unactive);
                console.log(active_codes_storage);


                
                


            }
            else{
            piano_Notes_unactive.push(piano_Notes_active[active_index]);
            piano_Notes_active.splice(active_index,1);
            active_codes_storage = piano_form_unactive.concat(piano_Chords_unactive).concat(piano_Notes_unactive);
                

            console.log(piano_Notes_active);
            console.log(piano_Notes_unactive);
            console.log(active_codes_storage);
        }






        }else{
            let unactive_index = piano_Notes_unactive.findIndex(i => i.display ==(`${selected_notes.innerText}`));
                
                if (unactive_index === -1){
                    unactive_index = piano_Chords_unactive.findIndex(i => i.display ==(`${selected_notes.innerText}`));
                    if (unactive_index === -1){
                        unactive_index = piano_form_unactive.findIndex(i => i.display ==(`${selected_notes.innerText}`));
                        piano_form_active.push(piano_form_unactive[unactive_index]);
                        piano_form_unactive.splice(unactive_index,1);
                        active_codes_storage = piano_form_unactive.concat(piano_Chords_unactive).concat(piano_Notes_unactive);


                        console.log(piano_form_active);
                        console.log(piano_form_unactive);
                        console.log(active_codes_storage);
                        save_active();
                         return };

                    piano_Chords_active.push(piano_Chords_unactive[unactive_index]);
                    piano_Chords_unactive.splice(unactive_index,1);
                    active_codes_storage = piano_form_unactive.concat(piano_Chords_unactive).concat(piano_Notes_unactive);


                    console.log(piano_Chords_active);
                    console.log(piano_Chords_unactive);
                    console.log(active_codes_storage);


                }else{

                piano_Notes_active.push(piano_Notes_unactive[unactive_index]);
                piano_Notes_unactive.splice(unactive_index,1);
                active_codes_storage = piano_form_unactive.concat(piano_Chords_unactive).concat(piano_Notes_unactive);


                console.log(piano_Notes_active);
                console.log(piano_Notes_unactive)
                console.log(active_codes_storage)
                }}
                save_active();
};


function clicks(item){
    const container_notes2 =document.querySelectorAll(".settings-page__container-codes");
    console.log(container_notes2);
    const find_index = whole.findIndex(i => i.display ==(`${item.display}`));
    console.log(find_index);
    console.log(container_notes2);

    container_notes2[find_index].click();
        
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

    const code_value = {display:`${ChordsDisplay}`,sounds:`${ChordsSounds}`,type:'Chords', id:Date.now()};

    piano_Chords_active.push(
        code_value
    );

    piano_codes_storage.push(
        code_value
    );

    savechords();
    paint_Chords(code_value);
  
    
}

function reveal_cancel(){
    const find_Chords_img =document.querySelectorAll(".settings-page__container-codes img");

    find_Chords_img.forEach((item) => item.classList.toggle("hidden"));
    find_Chords_img.forEach((item) => item.addEventListener("click",remove_newchord));
    
}


function remove_newchord(event){
    event.stopPropagation();                                        //상위 이벤트 막는 용도로 사용됨
    const id =(event.target.offsetParent.id);
    console.log(id);
    event.path[1].remove();
    piano_codes_storage = piano_codes_storage.filter(word => word.id !== parseInt(id));
    active_codes_storage = active_codes_storage.filter(word => word.id !== parseInt(id));
    piano_Chords_active = piano_Chords_active.filter(word => word.id !== parseInt(id));
    piano_Chords_unactive = piano_Chords_unactive.filter(word => word.id !== parseInt(id));

    savechords();
    save_active();


}


function paint_Chords(code_value){
    const container = document.querySelector(".settings-page .settings-page__container__group:nth-child(3) .settings-page__container");
    const container_codes_div = document.createElement("div");
    const container_codes_div_remove = document.createElement("img");

    container_codes_div_remove.setAttribute("src","img/remove_icon.png");
    container_codes_div_remove.classList.add("hidden");

    container_codes_div.classList.add("settings-page__container-codes");
    container_codes_div.id = code_value.id;
    container_codes_div.classList.add("activee");


    

    container_codes_div.innerText =`${code_value.display}`;
    container.appendChild(container_codes_div);
    container_codes_div.appendChild(container_codes_div_remove);

    container_codes_div.addEventListener("click",active);

    let Chords_index = whole.length-2;

    whole.splice(Chords_index,0,code_value);

}


function start(){
    const inputString = prompt('BPM을 입력하세요');
    let bpm =  60000 / parseInt(inputString);

    if (Number.isNaN(bpm)){
        console.log(bpm);
        alert("숫자만 입력 가능합니다")
        return}


    if (inputString === null | inputString === ""){
        alert("값을 입력하시죠?? ^^")
        return}

    first_page.classList.add(HIDDEN);
    main_page.classList.remove(HIDDEN);
    back_icon.classList.remove(HIDDEN);


    
    prechangetext();
    ab = setInterval(prechangetext, bpm);
    bc = setInterval(changetext, bpm);
    cd = setInterval(click, bpm);



    }


function stop(){
    console.log("done1");
    clearInterval(ab);
    clearInterval(bc);
    clearInterval(cd);
    console.log("done2");
    precodes=[-1,-1,-1];
    console.log("done3");
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
remove.addEventListener("click",reveal_cancel);
setting_icon.addEventListener("click",lord_setting_page);
back_icon.addEventListener("click",lord_first_page);


const getsavechords = localStorage.getItem(KEY1);
const getkeepchords = localStorage.getItem(KEY2);

if (getsavechords !== null){
    const parasavechords = JSON.parse(getsavechords);
    piano_codes_storage = parasavechords;
    console.log(piano_codes_storage);
    
    parasavechords.forEach((item) => paint_Chords(item));
    parasavechords.forEach((item) => piano_Chords_active.push(item));
};

if(getkeepchords!== null){
    const paragetkeepchords = JSON.parse(getkeepchords);
    active_codes_storage = paragetkeepchords;
    console.log(active_codes_storage);

    paragetkeepchords.forEach((item) => clicks(item));
    console.log(active_codes_storage);

    
}

back_icon.addEventListener("click",stop);








