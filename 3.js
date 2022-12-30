
	
    function countWays(digits, n)
    {
        if (n == 0 || (n == 1 && digits[0] == '0'))
        {
            return 0;
        }
        return countDecoding(digits, n);
    }
     
    // Driver code
    digits=['1', '2',"2","2"];
    let n = digits.length;
    document.write("Count is ",countWays(digits, n));

	function countDecoding(digits, n)
	{
		if ( n==0 || n == 1)
		{
			return 1;
		}

		if (digits[0] == '0')
		{
     
			return 0;
		}
		
	
		let count = 0;
		if (digits[n - 1] > '0')
		{
            console.log(digits[n - 1])
            
			count = countDecoding(digits, n - 1);
                    console.log(digits, n - 1,"n-1","count" ,count)
           
        }
        console.log(digits[n - 2] == '1',"digits[n - 2] == '1'")
        console.log((digits[n - 2] == '2' && digits[n - 1] < '7'),"(digits[n - 2] == '2' && digits[n - 1] < '7')")
		if (digits[n - 2] == '1' || (digits[n - 2] == '2' && digits[n - 1] < '7'))
		{   
            console.log(digits[n-2],"nsdjfgdhsvfhsd",digits[n - 2]," digits[n - 2] == '2'" ,digits[n - 1])
            count += countDecoding(digits, n - 2);
         
        }
        console.log(count,"count")
		return count;
	}

