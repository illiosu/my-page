window.onload = function(){
    
    const container = document.querySelector('.container')

    container.addEventListener('mouseenter', () => {
    container.querySelector('img').style.transform = 'rotateY(180deg)';
    })

    container.addEventListener('mouseleave', () => {
    container.querySelector('img').style.transform = 'rotateY(0deg)';
    })
    window.addEventListener('resize', function() {
        var height = window.innerHeight;
        document.getElementById('my-element').style.height = height + 'px';
      });
      $.get("https://v1.hitokoto.cn/",function(data,status){
    if (status == 'success'){
        $('.hitokoto').text(data.hitokoto);
    }else{
        $('.hitokoto').text('获取出错！');
    }
  })

}


