let variable = 100 >= 120 ? "greater than" : "lesser than"
const SelectButtons  = []
const SubSelectButtons = []
const Content = []
for (i = 0; i < document.getElementsByClassName("SelectButton").length; i++){
    SelectButtons[i] = document.getElementsByClassName(`SelectButton`)[i]
} 

for (i = 0; i < document.getElementsByClassName("SubSelectButton").length; i++){
    SubSelectButtons[i] = document.getElementsByClassName(`SubSelectButton`)[i]
} 

for (i = 0; i < document.getElementsByClassName("Content").length; i++){
    Content[i] = document.getElementsByClassName("Content")[i];
}

console.log("this variable", variable , "is a type of" , typeof variable, SelectButtons, typeof SelectButtons);
console.log(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
console.log("amogus")


SelectButtons.forEach(function(button, index) {
    button.addEventListener("click", function(){
    
        SelectButtons.forEach(function(self){
             if(button.className === "SelectButton active"){
            return
            }
            self.classList.remove(`active`)
        })
        
        Content.forEach(function(self){
           self.classList.remove(`show`)
        })

        SubSelectButtons.forEach(function(self){
            self.classList.remove(`active`)
        })
    
        this.classList.toggle(`active`)})
})

SubSelectButtons.forEach(function(button, index) {
    button.addEventListener("click", function(){

        Content.forEach(function(self){
           if(Content[index].className === "Content show"){
            console.log("something")
            return
           } 
           self.classList.remove(`show`)
        })

        SubSelectButtons.forEach(function(self){
             if(button.className === "SubSelectButton active"){
            return
            }
            self.classList.remove(`active`)
        })

        Content[index].classList.toggle(`show`)
        button.classList.toggle(`active`)
        

    })
})
const vid = document.getElementById("VidId");
console.log(SubSelectButtons, SelectButtons, Content);
vid.playbackRate = 0.55;

