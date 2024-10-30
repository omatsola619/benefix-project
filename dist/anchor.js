const icon = document.getElementById('icon');
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.addEventListener('DOMContentLoaded', () => {
	if (userTheme === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark')
	}
})

const themeSwitch = () => {
	if (document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.remove('dark');
		localStorage.setItem('theme', 'light')
		return;
	} else {
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark')
	}
}

icon.addEventListener('click', () => {
	themeSwitch();
});


function isPrime(n) {
	if (n < 2) {
	  return false;
	} 
	for (let i = 2; i < n; i++) {
	  if (n % i === 0) {
		return false;
	  }
	}
	return true;
}

  console.log(isPrime(9));



