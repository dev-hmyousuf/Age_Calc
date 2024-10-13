let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split('T')[0];

function calculateAge() {
  let toast = document.getElementById("toast");
  let birthDay = new Date(userInput.value);
  let birthDate = birthDay.getDate(),
    birthMonth = birthDay.getMonth() + 1, 
    birthYear = birthDay.getFullYear(),
    today = new Date(),
    todayDate = today.getDate(),
    todayMonth = today.getMonth() + 1,
    todayYear = today.getFullYear();

  
  let difDate, difMonth, difYear;

  difYear = todayYear - birthYear;
  
   
  if (birthYear >= 1992 && birthYear <= 2012) {
    showToast('Zen Z');
} 
// Baby Boomers
else if (birthYear >= 1946 && birthYear <= 1964) {
    showToast('Baby Boomers'); 
} 
// Generation X
else if (birthYear >= 1965 && birthYear <= 1980) {
    showToast('Zen X');
} 
// Millennials
else if (birthYear >= 1981 && birthYear <= 1996) {
    showToast('Millennials'); 
} 
// Generation Alpha
else if (birthYear >= 2013 && birthYear <= 2024) {
    showToast('Alpha');
}

  function convertToBangla(num) {
    num = num.toString();
    const englishToBanglaMap = {
      "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪",
      "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯"
    };
    return num.replace(/\d/g, (digit) => englishToBanglaMap[digit]);
  }
  let result = document.getElementById('result');

  if (!userInput.value) {
    result.innerHTML = `<p  class='text-red-500'>অনুগ্রহ করে সঠিক তারিখ প্রবেশ করুন</p>`;
    return;
  }

  

  if (todayMonth >= birthMonth) {
    difMonth = todayMonth - birthMonth;
  } else {
    difYear--; 
    difMonth = 12 + todayMonth - birthMonth;
  }

  if (todayDate >= birthDate) {
    difDate = todayDate - birthDate;
  } else {
    difMonth--; 
    difDate = getDaysInMonth(birthYear, birthMonth) + todayDate - birthDate;
  }

  if (difMonth < 0) {
    difMonth = 11;
    difYear--;
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); 
  }

   let ageInMilliseconds = today - birthDay;
   let ageInSeconds = Math.floor(ageInMilliseconds / 1000);
   let ageInMinutes = Math.floor(ageInSeconds / 60);
   let ageInHours = Math.floor(ageInMinutes / 60);
   let ageInDays = Math.floor(ageInHours / 24);
   let ageInMonthsCalc = Math.floor(ageInDays / 30);
   let ageInNanoseconds = ageInMilliseconds * 1e6; 
 
   document.getElementById('age-months').innerText = convertToBangla(ageInMonthsCalc);
   document.getElementById('age-days').innerText = convertToBangla(ageInDays);
   document.getElementById('age-hours').innerText = convertToBangla(ageInHours);
   document.getElementById('age-minutes').innerText = convertToBangla(ageInMinutes);
   document.getElementById('age-seconds').innerText = convertToBangla(ageInSeconds);
   document.getElementById('age-milliseconds').innerText = convertToBangla(ageInMilliseconds);
   document.getElementById('age-nanoseconds').innerText = convertToBangla(ageInNanoseconds);
 
   function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = `আলহামদুলিল্লাহ্‌ আপনি <span>${message}</span> জেনারেশন এর অন্তরভুক্ত`;
    toast.classList.remove("opacity-0", "translate-y-[-20px]", "pointer-events-none");
    toast.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
  
    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
      toast.classList.add("opacity-0", "translate-y-[-20px]", "pointer-events-none");
    }, 3000);
  }
  let banglaResult = convertToBangla(`আপনার বয়স <span class="">${difYear}</span> বছর, <span class="">${difMonth}</span> মাস, এবং <span class="">${difDate}</span> দিন`);

  result.innerHTML = banglaResult;

  

  document.getElementById("table").style.display = "flex";
}

document.getElementById("submitBtn").addEventListener("click", calculateAge);
