function sum(stn1, stn2) {
    // Khởi tạo kết quả và giá trị nhớ
    let result = '';
    let carry = 0;

    // Xác định độ dài của chuỗi đầu vào
    let len1 = stn1.length;
    let len2 = stn2.length;
    
    console.log("Bắt đầu cộng hai số:", stn1, "+", stn2);

    while (len1 >= 1 || len2 >= 1 || carry > 0) {
        // Lấy giá trị số từ chuỗi, nếu hết thì coi như là 0
        let digit1 = len1 >= 1 ? parseInt(stn1[len1-1]) : 0;
        let digit2 = len2 >= 1 ? parseInt(stn2[len2-1]) : 0;

        // Tính tổng của hai chữ số và giá trị nhớ
        let sum = digit1 + digit2 + carry;

        // Log quá trình
        console.log(`Cộng ${digit1} + ${digit2} + nhớ ${carry} = ${sum} (ghi ${sum % 10}, nhớ ${carry})`);

        // Cập nhật giá trị nhớ (chỉ lấy phần chục)
        carry = Math.floor(sum / 10);

        // Phần dư sẽ là chữ số cần ghi vào kết quả (chỉ lấy phần đơn vị)
        result = (sum % 10) + result;
        console.log("Kết quả:", result);



        // Giảm chỉ số để duyệt tiếp
        len1--;
        len2--;
    }


    
    // Trả về kết quả cuối cùng
    return result;
}

// Ví dụ sử dụng
sum("1234", "897"); // Kết quả: 2131