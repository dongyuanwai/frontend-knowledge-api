const questionsArray = require('./fe_interview.json')
// 发送 POST 请求的函数
function sendQuestionsToServer(questions) {
  const url = 'http://localhost:8686/knowledge';
  const formData = new FormData();
  formData.append('title', questions.title);
  formData.append('explanation', questions.explanation);
  formData.append('_id', questions._id);
  formData.append('category', questions.category);
  formData.append('renderType', questions.renderType);
  formData.append('level', questions.level);
  formData.append('tagId', questions.tagId||0);

  const options = {
    method: 'POST',
    body: formData, 
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // 解析响应数据为 JSON
    })
    .then(data => {
      console.log('Success:', data); // 处理返回的数据
    })
    .catch((error) => {
      console.error('Error:', error); // 处理错误
    });
}

// 调用函数发送数据

questionsArray.forEach(question => {
  sendQuestionsToServer(question);
})
// sendQuestionsToServer(questionsArray[0]);