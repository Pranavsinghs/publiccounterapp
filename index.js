//document.getElementById("count-el").innerText=5
let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl=document.getElementById("total-el")
let count=0;
let total=0;

function increment() {
count+=1;
countEl.textContent=count;

}

function save() {
let previousCounter= count + "-";
saveEl.textContent += previousCounter;
total+=count;
totalEl.textContent= "Total:" + total;
count=0;
countEl.textContent=0;
}
