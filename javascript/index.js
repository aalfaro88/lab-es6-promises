// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += "<li>Mashed potatoes are ready!</li>";
          mashedPotatoesImg.removeAttribute("hidden");
        });
      });
    });
  });
});

// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;

    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
    steakImg.removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoli").innerHTML += "<li>Broccoli is ready!</li>";
    broccoliImg.removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all

const p1 = obtainInstruction('brusselsSprouts', 0)
  .then((step0) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
  });

  const p2 = obtainInstruction('brusselsSprouts', 1)
  .then((step1) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
  });

  const p3 = obtainInstruction('brusselsSprouts', 2)
  .then((step2) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
  });

  const p4 = obtainInstruction('brusselsSprouts', 3)
  .then((step3) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
  });

  const p5 = obtainInstruction('brusselsSprouts', 4)
  .then((step4) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
  });

 

  Promise.all([p1,p2,p3,p4,p5])
  .then(() => {
    document.querySelector("#brusselsSprouts").innerHTML += "<li>Brussels sprouts are ready!</li>";
    brusselsSproutsImg.removeAttribute("hidden");
  })
  .catch((error) => {
    console.error(error);
  });





const mashedPotatoesImg = document.getElementById('mashedPotatoesImg');
const steakImg = document.getElementById('steakImg');
const brusselsSproutsImg = document.getElementById('brusselsSproutsImg');
const broccoliImg = document.getElementById('broccoliImg');




/*
<img src="images/mashed-potatoes.jpg" id="mashedPotatoesImg" hidden />
</div>
<div>
  <img src="images/steak.jpg" id="steakImg" hidden />
</div>
<div>
  <img src="images/brussels-sprouts.jpg" id="brusselsSproutsImg" hidden />
</div>
<div>  
  <img src="images/broccoli.jpg" id="broccoliImg" hidden />
// ...
*/