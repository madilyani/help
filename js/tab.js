//// radioTabs start
const radioBtnSelector = '.radioBtn';
const TabSelector = '.radioTab';
const tabsBtns = document.querySelectorAll(radioBtnSelector);
const tabs = document.querySelectorAll(TabSelector);

tabsBtns.forEach((e) => {
  onTabClick(e);
});
var tab = null;
function onTabClick(item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let currentBtnState = item.classList.contains("active");
    let parent = document.querySelector(item.getAttribute('data-parent'));
    let linkedTab = document.querySelector(item.getAttribute('data-tab'));
    let currentTabState = linkedTab?.classList.contains('active');
    
    if (parent) {
      parent.querySelectorAll(radioBtnSelector).forEach((e) => {
        e.classList.remove("active");
      });
      parent.querySelectorAll(TabSelector).forEach((e)=>{
        e.classList.remove("active");
      });

    }
   
    
    if(linkedTab && tabs){
      
      if (currentTabState) linkedTab.classList.remove("active");
      else linkedTab.classList.add("active");
    }

    if (currentBtnState) currentBtn.classList.remove("active");
    else currentBtn.classList.add("active");
  });
}
//// radioTabs end