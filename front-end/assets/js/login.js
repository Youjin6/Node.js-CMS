$(function() {
    // click to register
    $('#link-register').on('click', function() {
        $('.login-box').hide();
        $('.register-box').show();
    })

    $('#link-login').on('click', function() {
        $('.login-box').show();
        $('.register-box').hide();
    })

    // get layui form object
    var form = layui.form;

    // using form verify to validate user input
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],

        verifyPwd: function(value) {
            var pwd = $('.register-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码输入不一致'
            }
        }
    })

    $('#form_register').on('submit', function(e) {
        e.preventDefault();
        $.post('https://www.escook.cn/api/reguser', { username: $('#form_register [name=username]').val(), password: $('#form_register [name=password]').val(), }, function(res) {
            if (res.status !== 0) {
                return console.log(res.message);
            }
            console.log('success');
        })
    })
})