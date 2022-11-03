1] Write a program to accept an integer N and calculate the sum of its digits. 
	Please note N can have maximum 5 digits.

	function getSum(n)
	{
		var sum = 0;
		while (n != 0) {
			sum = sum + n % 10;
			n = parseInt(n / 10);
		}
		return sum;
	}
	let n = 12345;
	alert(getSum(n))
------------------------------------------------------------------------------------------------------------------
2] Write a program to accept an integer N and generate an integer M which is formed by reversing the digits of N. 
	Please note N can have maximum 5 digits
		var revNo = 0;
		var firstPos = 1;
		function reversDigits(num)
		{
		 
			if(num > 0)
			{
				reversDigits(Math.floor(num/10));
				revNo += (num%10)*firstPos;
				firstPos *= 10;
			}
			return revNo;
		}
			let num = 4562;
			alert("Reverse of no. is :" +reversDigits(num)
------------------------------------------------------------------------------------------------------------------
3] Write a program to accept an integer N and generate an integer M which is formed by reversing the digits of N. 
	Please note N can have maximum 5 digits. Print the numbers N and M. Compare N with M and print the result.
		var revNo = 0;
		var firstPos = 1;
		function reversDigits(num)
		{
		 
			if(num > 0)
			{
				reversDigits(Math.floor(num/10));
				revNo += (num%10)*firstPos;
				firstPos *= 10;
			}
			return revNo;
		}
			let num = 100;
			alert("The original number is : ",+num)
			alert("Reverse of no. is : " +reversDigits(num)
------------------------------------------------------------------------------------------------------------------
4] Write a program to accept 5 digit integer N and calculate the sum of its first and fifth digit.
	
	var n = 12345;
	var firstDigit;
	var lastDigit = n % 10;
	var len = num.toString().length - 1;
	
	firstDigit = parseInt(num / Math.pow(10, len))
	var sum = firstDigit + lastDigit;
	alert ("Sum of of first and last digit is : " +sum)
------------------------------------------------------------------------------------------------------------------
5] Write a program to accept a 5 digit integer N and then generates a number M by adding 1 to each digit.
	function newnum(n,len)
		{
		let sum="";
		for(let i=0;i<len;i++)
			{
			let num=n[i];
			let num1=parseInt(num);
			num1=num1+1;
			let num2=num1.toString();
			sum=sum+num2;
			}
		return sum;
		
		}

	var n =  12345;
	let text = n.toString();
	let len=text.length;
	if(len==5)
	{
	console.log(newnum(text, len));
	}
	else
	{
		console.log("number is not five digit")
	}
------------------------------------------------------------------------------------------------------------------

6] Accept cost price(CP) and Selling price(SP) of an item. Calculate the ammount of PROFIT/LOSS made by 
	the seller and print the LOSS
	
	function Profit(cp, sp)
    {
        let profit = (sp - cp);
        return profit;
    }
 
    function Loss(cp, sp)
    {
        let Loss = (cp - sp);
        return Loss;
    }
     
    let cp = 500, sp = 700;
   
    if (sp == cp)
		alert("No PROFIT no LOSS")
	
	else if(sp > cp )
		alert (Profit(cp, sp) + " Profit")
	
	else (sp < cp )
		alert (Loss(cp, sp) + " Loss")
------------------------------------------------------------------------------------------------------------------
7] Write a program to a accept a list of N integers. Find the largest and the smallest number in the list and their 
	respective positions in the list.
	
		let arr = [1, 2, 3, 4, 5]

		var maxi = arr[0];
		var largeIndex, smallIndex;
		var mini = arr[0];

		for (var i = 1; i < arr.length; i++) {

		  if (arr[i] > maxi) {
			maxi = arr[i];
			largeIndex=i;
		  } else if (arr[i] < mini) {
			mini = arr[i];
			smallIndex=i;
		  }

		 
		}
		 console.log("maxi value", maxi);
		 console.log("maxi value index in list ", largeIndex++);
		 console.log("mini value index in list ",mini);
		 console.log("mini value index in list ", smallIndex++);
------------------------------------------------------------------------------------------------------------------
8]Write a program to accept a list of N integers. Accept integer K. 
	Find the Kth smallest number in the list and its position.
	
	function kthSmallest(arr, N, K)
{
    let arr1=arr;
    arr.sort((a,b) => a-b);
    console.log("kth smallest element in list", arr[K-1]);
    let index;
    for(let i=0;i<N;i++)
    {
        if(arr1[i]==arr[K-1])
        {
            index=i;
        }
    }
console.log("kth smallest element index in list is", index);
}
 

    let arr = [12, 3, 5, 7, 19];
    let N = arr.length, K = 2;
    kthSmallest(arr, N, K);
------------------------------------------------------------------------------------------------------------------
9]Write a program to accept a list L1 of N integers. Accept integer M. Multiply each integer in the list by M and 
generate a new list L2. Print the lists L1 and L2.
	let n=prompt("enter a number");
	let L1 = [];
	for(let i=0;i<n;i++)
	{
	   L1[i]=prompt("enter list");
	}
	let m = prompt("enter second number to multiply with each element in list");
	let L2 = [];
	for(let j=0;j<n;j++)
	{
		L2[j] = L1[j]*m;
	}
	console.log(L2);
----------------------------------------------------------------------------------------------------------------------------------
10]Write a program to accept a list L1 of N integers. Accept integer D. Generate list L2 such that it contains only those integers 
from list L1 which are divisible by D. Calculate the size of list L2. Print the list L1, N, D, list L2 and its size.
	let n=prompt("enter a number");
	let L1 = [];
	for(let i=0;i<n;i++)
	{
	   L1[i]=prompt("enter list");
	}
	let D = prompt("enter d number ");
	let L2 = [];
	let p=0;
	for(let j=0;j<n;j++)
	{
		if(L1[j]%D == 0)
		{
			L2[p]=L1[j];
			p++;
		}
	}
	console.log(L2);
	-------------------------------------------------------------------------------------------------------------------------------
11]Write a program to accept cardinality of set A as N, and cardinality of set B as M. Then accept elements of set A and set B. 
Generate set C which is union of set A and set B, set D which is intersection set of set A and Set B. Print
 set A, B, C, D, Cardinality of set C, Cardinality of set D.
	 let n=prompt("enter a set a values");
	let m=prompt("enter a set b values");
	let setA = [];
	for(let i=0;i<n;i++)
	{
	  setA[i]=prompt("enter set A values");
	}
	let setB = [];
	for(let i=0;i<m;i++)
	{
	  setB[i]=prompt("enter set B values");
	}

	function findunion(setA, setB)
	{
	  let union = [...new Set([...setA, ...setB])];
	  return union;
	}

	function findintersection(setA, setB)
	{
	  let filteredArray = setA.filter(value => setB.includes(value));
	  return filteredArray;
	}
	//find out union set
	let unionset = findunion(setA, setB);
	let intersectionset = findintersection(setA, setB);
	console.log("set A", setA);
	console.log("set B", setB);
	console.log("union set C", unionset);
	console.log("intersection set D", intersectionset);
----------------------------------------------------------------------------------------------------------------------------
12]Write a program to accept number of circles N and radius and coordinates of center (x,y) for each circle. 
Select appropriate data structure and explain why you chose it. Arrange the circles in increasing order of their area and 
print all the data of each circle.

	let numofcircle = prompt("enter number of circle");
	let radius = [];
	let coordinates = [][];
	for(let i=0;i<numofcircle;i++)
	{
	  radius[i]=prompt("enter radius of circle = "+i);
	  for(let j=0;j<2;j++)
	  {
	  let x = prompt("enter coordinates  of circle = "+i);
	  coordinates[i][j]=x;
	  }
	}

	//find out area of all circles
	let area = [];
	for(let i=0;i<numofcircle;i++)
	{
	  let area=3.14*(radius[i]*radius[i]);
	  area[i]=area;
	}
	let icreasingindex = [];

	// it will find out kth smallest values from 0 to number of circle (area of circle)
	function kthSmallest(arr, N, K)
	{
		arr.sort((a,b) => a-b);
		return arr[K - 1];
	}

	//it will find out index of perticuler kth smallest value in area of circle
	function findindex(area[],value)
	{
	  let index = area.indexOf(value);
	  return index;
	}

	//find out increasing order of area and find out there index
	let p=0;
	for(let i=1;i<=numofcircle;i++)
	{
	  let value = kthSmallest(area, numofcircle,i);
	  let index = findindex(area,value);'
	  increasingindex[p]=index;
	  p++;
	}

	//print circle according to increasing order of there area
	for(let i=0;i<numofcircle;i++)
	{
	  let increasingorder = increasingindex[i];
	  console.log("area of circle  "+i+" = "+area[increasingorder]);
	  console.log("coordinates of circle "+i+" = "+"x ="+coordinates[increasingorder][0]+"y ="+coordinates[increasingorder][1])
	}
----------------------------------------------------------------------------------------------------------------------------------