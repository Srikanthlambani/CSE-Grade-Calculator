var E1S1_sub={'BEEE':4,'Maths':4,'IC':0,'IT Workshop':1,'C':4,'BEEE Lab':1.5,'English Lab':1.5,'It workshop lab':2,'C Lab':1.5};
var E1S2_sub={'C++ Lab':1.5,'DataStructures':3,'DataStructures Lab':1.5,'DiscreteMathematics':4,'Engineering Physics':4,'EnvironmentScience':0,'PhysicsLab':1.5,'C++':3};
var E2S1_sub={'DAA':4,'DLD':3,'Mefa':3,'Math':4,'Java':3,'DAA Lab':1.5,'Java Lab':1.5,'DLD Lab':1.5}
var E2S2_sub={'COA':3,'DBMS':3,'FLAT':3,'WT':3,'COA Lab':1.5,'WT Lab':1.5,'DBMS Lab':1.5,'English':1.5,'OR':3}
var E3S1_sub={'CD':3,'CN':3,'SE':3,'OS':3,'DM':3,'CNLAB':1.5,'SELAB':1.5,'OSLAB':1.5,'ENG':1.5}
var selectlist=document.querySelectorAll('select');
function E1S1()
{
   let total_credit=0.0;
   let total_value=0.0;
   x=0.0;
   for(let i in E1S1_sub)
   {
        total_credit=total_credit+E1S1_sub[i];
   }
   total_value=E1S1_sub['BEEE']*selectlist[0].value+E1S1_sub['Maths']*selectlist[1].value+E1S1_sub['IC']*selectlist[2].value+E1S1_sub['IT Workshop']*selectlist[3].value+E1S1_sub['C']*selectlist[4].value+E1S1_sub['BEEE Lab']*selectlist[5].value+E1S1_sub['English Lab']*selectlist[6].value+E1S1_sub['It workshop lab']*selectlist[7].value+E1S1_sub['C Lab']*selectlist[8].value;
   let result=total_value/total_credit;
   console.log(result);
   let res=document.querySelector('#bbt1');
   res.innerHTML='YOUR CGPA is '+result;
}
function E1S2()
{
   let total_credit=0.0;
   let total_value=0.0;
   x=0.0;
   for(let i in E1S2_sub)
   {
        total_credit=total_credit+E1S2_sub[i];
   }
   total_value=E1S2_sub['C++ Lab']*selectlist[9].value+E1S2_sub['DataStructures']*selectlist[10].value+E1S2_sub['DataStructures Lab']*selectlist[11].value+E1S2_sub['DiscreteMathematics']*selectlist[12].value+E1S2_sub['Engineering Physics']*selectlist[13].value+E1S2_sub['EnvironmentScience']*selectlist[14].value+E1S2_sub['PhysicsLab']*selectlist[15].value+E1S2_sub['C++']*selectlist[16].value;
   let result=total_value/total_credit;
   console.log(result);
   let res=document.querySelector('#bbt2');
   res.innerHTML='YOUR CGPA is '+result;  
}
function E2S1()
{
   let total_credit=0.0;
   let total_value=0.0;
   x=0.0;
   for(let i in E2S1_sub)
   {
        total_credit=total_credit+E2S1_sub[i];
   }
   total_value=E2S1_sub['DAA']*selectlist[17].value+E2S1_sub['DLD']*selectlist[18].value+E2S1_sub['Mefa']*selectlist[19].value+E2S1_sub['Math']*selectlist[20].value+E2S1_sub['Java']*selectlist[21].value+E2S1_sub['DAA Lab']*selectlist[22].value+E2S1_sub['Java Lab']*selectlist[23].value+E2S1_sub['DLD Lab']*selectlist[24].value;
   let result=total_value/total_credit;
   console.log(total_credit);
   console.log(total_value);
   console.log(result);
   let res=document.querySelector('#bbt3');
   res.innerHTML='YOUR CGPA is '+result;
}
function E2S2()
{
    let total_credit=0.0;
   let total_value=0.0;
   x=0.0;
   for(let i in E2S2_sub)
   {
        total_credit=total_credit+E2S2_sub[i];
   }
   total_value=E2S2_sub['COA']*selectlist[25].value+E2S2_sub['DBMS']*selectlist[26].value+E2S2_sub['FLAT']*selectlist[27].value+E2S2_sub['WT']*selectlist[28].value+E2S2_sub['COA Lab']*selectlist[29].value+E2S2_sub['WT Lab']*selectlist[30].value+E2S2_sub['DBMS Lab']*selectlist[31].value+E2S2_sub['English']*selectlist[32].value+E2S2_sub['OR']*selectlist[33].value;
   let result=total_value/total_credit;
   console.log(result);
   let res=document.querySelector('#bbt4');
   res.innerHTML='YOUR CGPA is '+result;
   
}
function E3S1()
{
    let total_credit=0.0;
   let total_value=0.0;
   x=0.0;
   for(let i in E3S1_sub)
   {
        total_credit=total_credit+E3S1_sub[i];
   }
   total_value=E3S1_sub['CD']*selectlist[34].value+E3S1_sub['CN']*selectlist[35].value+E3S1_sub['SE']*selectlist[36].value+E3S1_sub['OS']*selectlist[37].value+E3S1_sub['DM']*selectlist[38].value+E3S1_sub['CNLAB']*selectlist[39].value+E3S1_sub['SELAB']*selectlist[40].value+E3S1_sub['OSLAB']*selectlist[41].value+E3S1_sub['ENG']*selectlist[42].value;
   let result=total_value/total_credit;
   console.log(result);
   let res=document.querySelector('#bbt5');
   res.innerHTML='YOUR CGPA is '+result;
   
}
function on_E1S1()
{
    let ele=document.querySelector('#hidden-visible');
    let toshow1=document.querySelector('.E1_S1');
    let toshow2=document.querySelector('.E1_S2');
    let toshow3=document.querySelector('.E2_S1');
    let toshow4=document.querySelector('.E2_S2');
    let toshow5=document.querySelector('.E3_S1');
    ele.style.display="none";
    toshow1.style.display="block";
    toshow1.style.visibility="visible";
    toshow2.style.display="none";
    toshow3.style.display="none";
    toshow4.style.display="none";
    toshow5.style.display="none";
}
function on_E1S2()
{
    let ele=document.querySelector('#hidden-visible');
    let toshow1=document.querySelector('.E1_S1');
    let toshow2=document.querySelector('.E1_S2');
    let toshow3=document.querySelector('.E2_S1');
    let toshow4=document.querySelector('.E2_S2');
    let toshow5=document.querySelector('.E3_S1');
    ele.style.display="none";
    toshow2.style.display="block";
    toshow2.style.visibility="visible";
    toshow1.style.display="none";
    toshow3.style.display="none";
    toshow4.style.display="none";
    toshow5.style.display="none";

}
function on_E2S1()
{
    let ele=document.querySelector('#hidden-visible');
    let toshow1=document.querySelector('.E1_S1');
    let toshow2=document.querySelector('.E1_S2');
    let toshow3=document.querySelector('.E2_S1');
    let toshow4=document.querySelector('.E2_S2');
    let toshow5=document.querySelector('.E3_S1');
    ele.style.display="none";
    toshow3.style.display="block";
    toshow3.style.visibility="visible";
    toshow1.style.display="none";
    toshow2.style.display="none";
    toshow4.style.display="none";
    toshow5.style.display="none";
}
function on_E2S2()
{
    let ele=document.querySelector('#hidden-visible');
    let toshow1=document.querySelector('.E1_S1');
    let toshow2=document.querySelector('.E1_S2');
    let toshow3=document.querySelector('.E2_S1');
    let toshow4=document.querySelector('.E2_S2');
    let toshow5=document.querySelector('.E3_S1');
    ele.style.display="none";
    toshow4.style.display="block";
    toshow4.style.visibility="visible";
    toshow1.style.display="none";
    toshow2.style.display="none";
    toshow3.style.display="none";
    toshow5.style.display="none";
}
function on_E3S1()
{
    let ele=document.querySelector('#hidden-visible');
    let toshow1=document.querySelector('.E1_S1');
    let toshow2=document.querySelector('.E1_S2');
    let toshow3=document.querySelector('.E2_S1');
    let toshow4=document.querySelector('.E2_S2');
    let toshow5=document.querySelector('.E3_S1');
    ele.style.display="none";
    toshow5.style.display="block";
    toshow5.style.visibility="visible";
    toshow1.style.display="none";
    toshow2.style.display="none";
    toshow3.style.display="none";
    toshow4.style.display="none";
}
var E1S1_button=document.querySelector('#E1S1');
var E1S2_button=document.querySelector('#E1S2');
var E2S1_button=document.querySelector('#E2S1');
var E2S2_button=document.querySelector('#E2S2');
var E3S1_button=document.querySelector('#E3S1');
E1S1_button.addEventListener('click',on_E1S1);
E1S2_button.addEventListener('click',on_E1S2);
E2S1_button.addEventListener('click',on_E2S1);
E2S2_button.addEventListener('click',on_E2S2);
E3S1_button.addEventListener('click',on_E3S1);
var E1st_submit=document.querySelector('#E1st_submit');
var E2nd_submit=document.querySelector('#E2nd_submit');
var E3rd_submit=document.querySelector('#E3rd_submit');
var E4th_submit=document.querySelector('#E4th_submit');
var E5th_submit=document.querySelector('#E5th_submit');
E1st_submit.addEventListener('click',E1S1);
E2nd_submit.addEventListener('click',E1S2);
E3rd_submit.addEventListener('click',E2S1);
E4th_submit.addEventListener('click',E2S2);
E5th_submit.addEventListener('click',E3S1);