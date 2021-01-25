//retrieving values from the form input fields
const list = document.querySelector('#result-container table');
const forms = document.forms;
console.log(list);
let count;
const addItem = forms[0];
addItem.addEventListener('submit', (e) => {

	e.preventDefault();

	const fname = document.querySelector('#fname').value;
	console.log(fname);
	const lname = document.querySelector('#lname').value;
	const email = document.querySelector('#email').value;
	const number = document.querySelector('#number').value;

	if(count > 0)
	{
		for(let i=0; i<list.rows.length; i++)
		{
			let data = list.rows.item(i).cells;

			if(data.item(2) == email || data.item(3) == number)
			{
				window.alert("Entry already exists!");
				exit();
			}
		}
	}

	else
	{
		console.log(lname, email, number);
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
	
		td1.textContent = fname;
		td2.textContent = lname;
		td3.textContent = email;
		td4.textContent = number;
		
		list.appendChild(tr);
		tr.appendChild(td1);  
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		count++;
	}	
});