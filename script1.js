// Here i stored data in array temprory purpose but i can fetch data from mysql or mongodb
let myjson = [
    { questionId: 0, question: `A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:`, optionA: "Rs. 650", optionB: "Rs. 690", optionC: "Rs. 698", optionD: "Rs. 700", answer: "c", useranswer: "" },
    { questionId: 1, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 2, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 3, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 4, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 5, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 6, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 7, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 8, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 9, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 10, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 11, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 12, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 13, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 14, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 15, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 16, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 17, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 18, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 19, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 20, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 21, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 22, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 23, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 24, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 25, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 26, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 27, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 28, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 29, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 30, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 31, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 32, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 33, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 34, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 35, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 36, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 37, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "8900", optionD: "8925", answer: "d", useranswer: "" },
    { questionId: 38, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 39, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 40, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 41, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 42, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 43, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 44, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 45, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 46, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 47, question: `A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?`, optionA: "Rs. 4462.50", optionB: "Rs. 8032.50", optionC: "Rs. 8900", optionD: "Rs. 8925", answer: "d", useranswer: "" },
    { questionId: 48, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" },
    { questionId: 49, question: `How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?`, optionA: "3.5 years", optionB: "4 years", optionC: "4.5 years", optionD: "5 years", answer: "b", useranswer: "" }
]
// Variable to keep track of the current question index
if (sessionStorage.getItem('marks')) {
    window.location.href = 'Home.html';
}
else {
    document.body.innerHTML = `<nav  id='myNav'  class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Home.html">Home</a>
        </li>
        
    </div>
  </div>
</nav>
<!-- navigation bar end -->

<!-- timer  -->
<div id="timerBox"  >
<div></div>
<div></div>
<div></div>
<div id="timer" style="display:flex; justify-content:center;  align-items: center;"class="m-3" >Time Remaining 02 : 00 : 00</div>
<!-- timer  -->

</div>

<div class=" mx-4" id="navigateQuestionsButtonDiv">
<div></div>
<div></div>
<div></div>

  <div  style="display:flex; justify-content:right;  align-items: center;" >

  <button  class='btn btn-outline-primary' id="NavigationButtonsButton"  onclick="showNavigationButtons()">Questions</button>
  <!-- <button   onclick="navigateQuestionsContainer1Display()">Click Me 2</button> -->
  </div>
</div>
<div class=" mycontainer mx-4 mb-4 example" id="myContainer">
    <!-- question box  code start -->
    

    <div class="my-1 border-black" id='questionContainer'>
      
        <div>
        <div class="button-container">
    
            <!-- Previous Button -->

            <input type="button" class='m-2 btn btn-outline-primary'  value="Previous" onclick="previousQuestion()">
    
            <!-- Next Button -->
            <input type="button" class='m-2 btn btn-outline-primary' value="Next" onclick="nextQuestion()">
    
        </div>
        </div>
    </div>
<!-- question box  code end -->

<!-- question navigationn  code start-->
<div  style="background-color:#292929; border-radius:5px;" id="navigateQuestionsContainer"class="my-1">
    <div class=" p-4" id='navigateQuestions'>
   <button class="btn  btn-outline-danger" id="btn1" onclick="goToQuestion(1)">1</button>
   <button class="btn btn-outline-primary" id="btn2" onclick="goToQuestion(2)">2</button>
   <button class="btn btn-outline-primary" id="btn3" onclick="goToQuestion(3)">3</button>
   <button class="btn btn-outline-primary" id="btn4" onclick="goToQuestion(4)">4</button>
   <button class="btn btn-outline-primary" id="btn5" onclick="goToQuestion(5)">5</button>
   <button class="btn btn-outline-primary" id="btn6" onclick="goToQuestion(6)">6</button>
   <button class="btn btn-outline-primary" id="btn7" onclick="goToQuestion(7)">7</button>
   <button class="btn btn-outline-primary" id="btn8" onclick="goToQuestion(8)">8</button>
   <button class="btn btn-outline-primary" id="btn9" onclick="goToQuestion(9)">9</button>
   <button class="btn btn-outline-primary" id="btn10" onclick="goToQuestion(10)">10</button>
   <button class="btn btn-outline-primary" id="btn11" onclick="goToQuestion(11)">11</button>
   <button class="btn btn-outline-primary" id="btn12" onclick="goToQuestion(12)">12</button>
   <button class="btn btn-outline-primary" id="btn13" onclick="goToQuestion(13)">13</button>
   <button class="btn btn-outline-primary" id="btn14" onclick="goToQuestion(14)">14</button>
   <button class="btn btn-outline-primary" id="btn15" onclick="goToQuestion(15)">15</button>
   <button class="btn btn-outline-primary" id="btn16" onclick="goToQuestion(16)">16</button>
   <button class="btn btn-outline-primary" id="btn17" onclick="goToQuestion(17)">17</button>
   <button class="btn btn-outline-primary" id="btn18" onclick="goToQuestion(18)">18</button>
   <button class="btn btn-outline-primary" id="btn19" onclick="goToQuestion(19)">19</button>
   <button class="btn btn-outline-primary" id="btn20" onclick="goToQuestion(20)">20</button>
   <button class="btn btn-outline-primary" id="btn21" onclick="goToQuestion(21)">21</button>
   <button class="btn btn-outline-primary" id="btn22" onclick="goToQuestion(22)">22</button>
   <button class="btn btn-outline-primary" id="btn23" onclick="goToQuestion(23)">23</button>
   <button class="btn btn-outline-primary" id="btn24" onclick="goToQuestion(24)">24</button>
   <button class="btn btn-outline-primary" id="btn25" onclick="goToQuestion(25)">25</button>
   <button class="btn btn-outline-primary" id="btn26" onclick="goToQuestion(26)">26</button>
   <button class="btn btn-outline-primary" id="btn27" onclick="goToQuestion(27)">27</button>
   <button class="btn btn-outline-primary" id="btn28" onclick="goToQuestion(28)">28</button>
   <button class="btn btn-outline-primary" id="btn29" onclick="goToQuestion(29)">29</button>
   <button class="btn btn-outline-primary" id="btn30" onclick="goToQuestion(30)">30</button>
   <button class="btn btn-outline-primary" id="btn31" onclick="goToQuestion(31)">31</button>
   <button class="btn btn-outline-primary" id="btn32" onclick="goToQuestion(32)">32</button>
   <button class="btn btn-outline-primary" id="btn33" onclick="goToQuestion(33)">33</button>
   <button class="btn btn-outline-primary" id="btn34" onclick="goToQuestion(34)">34</button>
   <button class="btn btn-outline-primary" id="btn35" onclick="goToQuestion(35)">35</button>
   <button class="btn btn-outline-primary" id="btn36" onclick="goToQuestion(36)">36</button>
   <button class="btn btn-outline-primary" id="btn37" onclick="goToQuestion(37)">37</button>
   <button class="btn btn-outline-primary" id="btn38" onclick="goToQuestion(38)">38</button>
   <button class="btn btn-outline-primary" id="btn39" onclick="goToQuestion(39)">39</button>
   <button class="btn btn-outline-primary" id="btn40" onclick="goToQuestion(40)">40</button>
   <button class="btn btn-outline-primary" id="btn41" onclick="goToQuestion(41)">41</button>
   <button class="btn btn-outline-primary" id="btn42" onclick="goToQuestion(42)">42</button>
   <button class="btn btn-outline-primary" id="btn43" onclick="goToQuestion(43)">43</button>
   <button class="btn btn-outline-primary" id="btn44" onclick="goToQuestion(44)">44</button>
   <button class="btn btn-outline-primary" id="btn45" onclick="goToQuestion(45)">45</button>
   <button class="btn btn-outline-primary" id="btn46" onclick="goToQuestion(46)">46</button>
   <button class="btn btn-outline-primary" id="btn47" onclick="goToQuestion(47)">47</button>
   <button class="btn btn-outline-primary" id="btn48" onclick="goToQuestion(48)">48</button>
   <button class="btn btn-outline-primary" id="btn49" onclick="goToQuestion(49)">49</button>
   <button class="btn btn-outline-primary" id="btn50" onclick="goToQuestion(50)">50</button>
</div> 
<div class="button-container">
 
         <!-- Submit Button -->
         <input type="button" class=' btn mb-2 btn-success' value="Submit" onclick="submitTest()">
</div>
</div>
<!-- question navigationn  code end-->
`;


    let storedData = sessionStorage.getItem('myjson');
    let currentQuestion = 0;
    let visitedQuestions = [0];
    let timeInSeconds = 2 * 3600;
    let resumeTest;
    let timerElement = document.getElementById('timer');
    let intervalId = setInterval(updateTimer, 1000);
    let totalAttemptedQuestions = 0;
    let totalAttemptedQuestionsArray = [];


    if (storedData) {
        resumeTestFun();
        //     document.body.innerHTML=` <h1>Welcome to the Test Application</h1>

        // <div class="options">
        //   <button class="option-btn" id="resumeTestBtn" onclick="resumeTestFun()">Resume Test</button>
        //   <button class="option-btn" id="startNewTestBtn" onclick="noResumeTestFun()">Start New Test</button>
        // </div>
        // `;
        // If data exists, parse it

    }
    else {
        noResumeTestFun();
        //     document.body.innerHTML=` <h1>Welcome to the Test Application</h1>

        // <div class="options">

        //   <button class="option-btn" id="startNewTestBtn" onclick="noResumeTestFun()">Start New Test</button>
        // </div>
        // `;
    }

    function fun() {
        let NavigationButtonsButton = document.getElementById('NavigationButtonsButton');
        let distanceFromTop = NavigationButtonsButton.offsetTop;
        console.log(distanceFromTop);
        let navigateQuestionsContainer = document.getElementById('navigateQuestionsContainer');
        navigateQuestionsContainer.style.top = `${distanceFromTop + NavigationButtonsButton.offsetHeight - 3}` + 'px';
        console.log(navigateQuestionsContainer.style.top);
        console.log(NavigationButtonsButton.offsetHeight);
    }

    function checkMediaQuery() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            // Run the function for desktop when the media query matches

        } else {
            // Run the function for mobile when the media query doesn't match
            navigateQuestionsContainer1Display();
        }
    }
    function showNavigationButtons() {

        let navigateQuestionsContainer = document.getElementById('navigateQuestionsContainer');

        navigateQuestionsContainer.style.display = 'block';
        fun();


    }

    function navigateQuestionsContainer1Display() {
        let navigateQuestionsContainer = document.getElementById('navigateQuestionsContainer');

        navigateQuestionsContainer.style.display = 'none';

    }
    function resumeTestFun() {
        resumeTest = true;
        resumeTestFun2()
    }
    function noResumeTestFun() {
        resumeTest = false;
        resumeTestFun2()
    }

    function resumeTestFun2() {
        console.log('hi');
        if (resumeTest) {
            // If data exists, parse it
            myjson = JSON.parse(storedData);
            currentQuestion = JSON.parse(sessionStorage.getItem('currentQuestion'));
            visitedQuestions = JSON.parse(sessionStorage.getItem('visitedQuestions'));
            timeInSeconds = 2 * 3600 - Math.floor((new Date().getTime() - sessionStorage.getItem('timeStart')) / 1000);
            console.log('myjson', myjson);
            console.log('currentQuestion', currentQuestion);
            console.log('visitedQuestions', visitedQuestions);
            markVisitedQuestionsUsingVisitedArray();
            markOptionSelectedQuestionAfterReload();

        } else {
            // If no data exists, create a default dataset

            sessionStorage.setItem('myjson', JSON.stringify(myjson));
            sessionStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
            sessionStorage.setItem('visitedQuestions', JSON.stringify(visitedQuestions));
            sessionStorage.setItem('timeStart', new Date().getTime());

        }

        updateTimer();
        displayQuestion();
    }
    function saveMyjsonTosessionStorage() {
        sessionStorage.setItem('myjson', JSON.stringify(myjson));
    }
    function savecurrentQuestionTosessionStorage() {
        sessionStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
    }
    function savevisitedQuestionsTosessionStorage() {
        sessionStorage.setItem('visitedQuestions', JSON.stringify(visitedQuestions));
    }
    function markVisitedQuestionsUsingVisitedArray() {
        for (let i = 0; i < visitedQuestions.length; i++) {
            markVisitedQuestion(visitedQuestions[i] + 1);
        }

    }

    function markOptionSelectedQuestionAfterReload() {
        for (let i = 0; i < 50; i++) {
            let mybtn = document.getElementById(`btn${i + 1}`);
            if (myjson[i].useranswer != "") {
                mybtn.className = 'btn btn-outline-success';
            }
        }
    }


    // Function to update the UI with the current question
    function displayQuestion() {

        let questionContainer = document.getElementById('questionContainer');
        let currentQues = myjson[currentQuestion];
        // Update the UI with the current question and options

        questionContainer.innerHTML = `
            <div>
            <h3 class='m-3'>Question ${currentQuestion + 1}</h3>
            <p class='my-3 p-3' >${currentQues.question}</p>
            </div>
            <div>
            <form >
            <ul class="list-group m-3">
            <div class="list-group-item p-3">
            <input type="radio" id="optionA" name="useranswer" value="a" onclick="handleClick(this) " ${myjson[currentQuestion].useranswer == 'a' ? 'checked' : ''}>
            <label for="optionA">${currentQues.optionA}</label><br>
            </div>
            <div class="list-group-item p-3">
                <input type="radio" id="optionB" name="useranswer" value="b" onclick="handleClick(this)"${myjson[currentQuestion].useranswer == 'b' ? 'checked' : ''}>
                <label for="optionB">${currentQues.optionB}</label><br>
                </div>
                <div class="list-group-item p-3">
                <input type="radio" id="optionC" name="useranswer" value="c"onclick="handleClick(this)"${myjson[currentQuestion].useranswer == 'c' ? 'checked' : ''}>
                <label for="optionC">${currentQues.optionC}</label><br>
                </div>
                <div class="list-group-item p-3">
                <input type="radio" id="optionC" name="useranswer" value="d" onclick="handleClick(this)"${myjson[currentQuestion].useranswer == 'd' ? 'checked' : ''}>
                <label for="optionC">${currentQues.optionD}</label>
                </div>
                </ul>
                </form>
                </div> 
                <div class="button-container">
                
                
                
            <input type="button" class='m-2 btn btn-outline-primary'  value="Previous" onclick="previousQuestion()">
    
          
            <input type="button" class='m-2 btn btn-outline-primary' value="Next" onclick="nextQuestion()">
            
            </div>`;
        console.log("objectr")

        // MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionContainer]);

    }

    function addToVisitedQuestionsIfNot() {
        if (!visitedQuestions.includes(currentQuestion)) {
            visitedQuestions.push(currentQuestion);
        }
    }
    function markVisitedQuestion(questionNo) {
        myBtn = document.getElementById(`btn${questionNo}`);
        myBtn.className = ' btn btn-outline-danger';
    }
    function markOptionSelectedQuestion() {
        let mybtn = document.getElementById(`btn${currentQuestion + 1}`);
        if (myjson[currentQuestion].useranswer != "") {
            mybtn.className = 'btn btn-outline-success';
        }
    }

    // let myBtn = document.getElementById();

    // Change the class by adding a new class
    // myBtn.classList.add('newClass');

    // Alternatively, you can replace the existing class with a new one
    // myBtn.className = 'btn-outline-danger';



    function previousQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
            markVisitedQuestion(currentQuestion + 1);
            addToVisitedQuestionsIfNot();
            markOptionSelectedQuestion();
            savecurrentQuestionTosessionStorage();
            savevisitedQuestionsTosessionStorage();
            // if (!visitedQuestions.includes(currentQuestion)) {
            //     visitedQuestions.push(currentQuestion);
            //     }
        }
        console.log(visitedQuestions);
    }
    function nextQuestion() {
        if (currentQuestion < myjson.length - 1) {
            console.log("next question")
            currentQuestion++;
            console.log(currentQuestion)
            displayQuestion();
            markVisitedQuestion(currentQuestion + 1);
            addToVisitedQuestionsIfNot();
            markOptionSelectedQuestion();
            savecurrentQuestionTosessionStorage();
            savevisitedQuestionsTosessionStorage();
            //     if (!visitedQuestions.includes(currentQuestion)) {
            //         visitedQuestions.push(currentQuestion);
            //         }
        }
        console.log(visitedQuestions);
    }


    function calculateMarks() {
        let totalMarks = 0;
        console.log(myjson[0]);

        // Iterate through the quiz data
        for (let i = 0; i < myjson.length; i++) {
            // Compare user's answer with the correct answer
            if (myjson[i].useranswer === myjson[i].answer) {
                // Add 2 to total marks if the answer is correct
                totalMarks += 2;
            }
            if (myjson[i].useranswer != "") {
                // Add 2 to total marks if the answer is correct
                totalAttemptedQuestions = totalAttemptedQuestions + 1;
                totalAttemptedQuestionsArray.push(i);
            }

        }
        sessionStorage.setItem("totalAttemptedQuestions", JSON.stringify(totalAttemptedQuestions));
        sessionStorage.setItem("totalAttemptedQuestionsArray", JSON.stringify(totalAttemptedQuestionsArray));

        console.log("totalAttemptedQuestions", totalAttemptedQuestions)
        console.log("totalAttemptedQuestionsArray", totalAttemptedQuestionsArray)
        // Display the total marks (you can modify this part based on your requirements)
        // alert(`Total Marks: ${totalMarks}`);
        return totalMarks;

    }
    function goToQuestion(questionNo) {
        markVisitedQuestion(questionNo);
        console.log("object", questionNo);
        currentQuestion = questionNo - 1;
        addToVisitedQuestionsIfNot(currentQuestion);
        displayQuestion();
        markOptionSelectedQuestion();
        savecurrentQuestionTosessionStorage();
        savevisitedQuestionsTosessionStorage();
        console.log(visitedQuestions);
        checkMediaQuery();
    }
    function submitTest() {
        // Calculate marks (replace with your logic)
        let marks = calculateMarks();
        sessionStorage.removeItem("myjson");
        sessionStorage.removeItem("currentQuestion");
        sessionStorage.removeItem("visitedQuestions");
        sessionStorage.removeItem("timeStart");
        sessionStorage.setItem('marks', JSON.stringify(marks));
        sessionStorage.setItem('myjsonResponse', JSON.stringify(myjson));
        // document.body.innerHTML='';
        window.location.href = "index2.html";


    }



    function updateTimer() {

        // Calculate hours, minutes, and seconds
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor((timeInSeconds % 3600) / 60);
        let seconds = timeInSeconds % 60;

        // Display the timer on the page
        timerElement.textContent = `Time Remaining ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

        // Decrease the time by 1 second
        timeInSeconds--;

        // Check if the time has reached 0, then submit the test
        if (timeInSeconds < 0) {
            submitTest();
        }

    }

    function handleClick(radioButton) {



        if (!radioButton.counter) {
            console.log(radioButton.value);
            if (myjson[currentQuestion].useranswer == radioButton.value) {
                radioButton.counter = 2;
            } else {
                radioButton.counter = 1;
            }
        }
        else if (radioButton.counter == 1 && myjson[currentQuestion].useranswer != radioButton.value) {
            radioButton.counter = 1;
        }
        else {
            console.log(radioButton.value);
            console.log(radioButton.counter);
            radioButton.counter++;
        }

        if (radioButton.counter === 2) {
            radioButton.checked = false; // Uncheck the radio button
            radioButton.counter = 0; // Reset the counter
            myjson[currentQuestion].useranswer = '';
            saveMyjsonTosessionStorage();
            let mybtn = document.getElementById(`btn${currentQuestion + 1}`);
            mybtn.className = 'btn btn-outline-danger';
        }
        if (radioButton.counter === 1) {
            updateUserAnswer(radioButton);
            let mybtn = document.getElementById(`btn${currentQuestion + 1}`);
            mybtn.className = 'btn btn-outline-success';

        }
    }
    function updateUserAnswer(selectedRadioButton) {
        // const questionIndex = parseInt(selectedRadioButton.name.replace("userAnswer", "")) - 1;

        myjson[currentQuestion].useranswer = selectedRadioButton.value;
        saveMyjsonTosessionStorage();
        console.log(myjson);
        // console.log(selectedRadioButton);
    }
}