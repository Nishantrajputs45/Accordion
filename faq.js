const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];

function showFaq() {
  let faqs = document.querySelectorAll(".faq");
  faqs.forEach((faq) => {
    let p = faq.children[1];
    let btn1 = faq.children[0].children[1];
    let btn2 = faq.children[0].children[2];
    btn1.addEventListener("click", () => {
      faqs.forEach((faq) => {
        let p1 = faq.children[1];
        let btn3 = faq.children[0].children[1];
        let btn4 = faq.children[0].children[2];
        btn4.classList.remove("show_btn");
        btn4.classList.add("hidden_btn");
        btn3.classList.remove("hidden_btn");
        btn3.classList.add("show_btn");
        p1.style.display = "none";
      });
      btn1.classList.remove("show_btn");
      btn1.classList.add("hidden_btn");
      btn2.classList.remove("hidden_btn");
      btn2.classList.add("show_btn");
      p.style.display = "block";
    });

    btn2.addEventListener("click", () => {
      btn2.classList.remove("show_btn");
      btn2.classList.add("hidden_btn");
      btn1.classList.remove("hidden_btn");
      btn1.classList.add("show_btn");
      p.style.display = "none";
    });
  });
}

function createFaq(accordianBody, faqData) {
  faqData.forEach((data) => {
    let faq = document.createElement("div");
    faq.classList.add("faq");

    let faq_header = document.createElement("div");
    faq_header.classList.add("faq_header");

    let h3 = document.createElement("h3");
    let textNode1 = document.createTextNode(data.question);
    h3.appendChild(textNode1);
    faq_header.appendChild(h3);

    let button1 = document.createElement("button");
    let show_btn = document.createTextNode("+");
    button1.appendChild(show_btn);
    button1.classList.add("btn");
    button1.classList.add("show_btn");
    faq_header.appendChild(button1);

    let button2 = document.createElement("button");
    let hidden_btn = document.createTextNode("-");
    button2.appendChild(hidden_btn);
    button2.classList.add("btn");
    button2.classList.add("hidden_btn");
    faq_header.appendChild(button2);

    faq.appendChild(faq_header);
    let p = document.createElement("p");
    let textNode2 = document.createTextNode(data.answer);
    p.appendChild(textNode2);
    p.classList.add("hidden");
    faq.appendChild(p);
    accordianBody.appendChild(faq);
  });
}
function btnStatusUpdate() {}
createFaq(accordianBody, faqData);
showFaq();
