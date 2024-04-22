var text = document.querySelector('.card.px-4.py-8.mb-6.lg\\:px-6.lg\\:mb-0.lg\\:shadow-none.lg\\:hover\\:shadow-none.shadow-none');
var question = document.querySelector('.text-neutral-80.leading-tight.mb-8');
var answerItems = document.querySelectorAll('.flex.items-center.justify-between.pr-5.py-3.rounded-size-24.pl-4.cursor-pointer.mb-1.hover\\:bg-background');


if (text && question && answerItems) {
  var answerItemsInnerHTML = Array.from(answerItems).map((item) => item.innerHTML);
  var prompt = text.innerHTML + '\n' + question.innerHTML + '\n' + answerItemsInnerHTML.join('\n') + '\n\n' + 'Answer (single letter):';
  main(prompt);
} else {
  console.log("No div with id containing 'support' found.");
}

async function main(prompt) {
  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + '<openai api key>'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    })
  })
  .then(response => response.json())
  .then(data => {
    var result = data;
    alert(result.choices[0].message.content);
  })
  .catch(error => console.error("Error:", error));
}