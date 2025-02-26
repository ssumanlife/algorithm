function solution(dartResult) {
    let num = 0
    let arr = []
  for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
                num = 10;
                i++;
            } else {
                num = Number(dartResult[i]);
            }
        } else { 
            if (dartResult[i] === 'S') {
                arr.push(num);
            } else if (dartResult[i] === 'D') {
                arr.push(num ** 2);
            } else if (dartResult[i] === 'T') {
                arr.push(num ** 3);
            } else if (dartResult[i] === '*') {
                if (arr.length > 1) {
                    arr[arr.length - 2] *= 2; 
                }
                arr[arr.length - 1] *= 2;
            } else if (dartResult[i] === '#') {
                arr[arr.length - 1] *= -1;
            }
        }
    }
    return arr.reduce((a,b) => a+b)

}