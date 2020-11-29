学习笔记

## 有限状态机：

可以把有限状态机的每一个状态机理解成一个个不同的函数
在每一个状态机里面都可以计算，存储，输出
每一个状态机里面接受的输入是一致的，比如如果接受字符串为输入，那么这一组状态机就必须都接受字符串为输入
每一个状态机里本身是无状态的，他只接受一个输入，根据指定逻辑返回下一个状态作为输出，他是函数式编程里面的纯函数，没有副作用。


## 状态机有两种

Moore：表示每一个状态机都有确定的下一个状态
Mealy：表示每一个状态机的下一个状态都由这个状态机的输入确定



# http 的过程

#### 服务端

创建一个服务器监听了端口 8888，在客户端发来一个 request 请求后将发送过来的信息打印到屏幕上，并返回一个 hello world 的 response 和 200 的状态码

#### 客户端

- 首先客户端 new 了一个 request，将 request 方法（get)，端口，IP 地址等信息填好发送给服务器。发送的方法 send()是一个 promise 是因为，在接受到服务器返回的 response 的时候我们需要解析这个 response，然后才能正确的显示返回内容

- 返回的格式为如下： Response Line (HTTP/1.1 200 OK) Headers （headerName: headerValue）


​      16 进制数：表明 body 字符的长度 body 内容 ‘0’：表示 body 字符长度为 0，已经解析完毕

- 解析分为两部：


1.  先解析服务器返回的头，用到 ReponseParser 类，解析的过程仍然是使用状态机。解析完成后，这个类包含          者 response line 和 header 信息。

2.  然后解析 body，用到 TrunkedBodyParser 类，解析过程使用状态机。解析完成后，这个类包含解析后的 body 内容。
3. 解析完后，在 Request 类中的 send 方法里 resove 这些内容，得到正确的返回结果。
4. 另外需要注意的是一些细节问题，比如在客户端发送 request 给服务端的时候要记得 URIEncode，因为当字符串要以 uri 的形式传给服务器的时候字符是不允许出现空格和特殊字符的

## 状态机的劣势

在使用状态机之前必须得提前知道所有的状态，如果有新的状态加进来，之前的代码必须得重新审计以免状态切换错误

## 状态机优势

代码逻辑清晰，避免用一个变量来判断不同状态，这样可能导致多个地方更改这个变量引发状态错误。



# HTTP 协议

流 : 没有明确的分界, 只保证顺序 先由客户端主动发起: 一个 request 和 一个 response



## http 协议结构

> POST/HTTP/1.1 // request Line Host: 127.0.0.1 // headers Content-Type: application/x-www-form-urlencoded // header // 中间必须有空行, 用来区分 body 和 header field1=aaa&code //body

response 文本

> HTTP/1.1 200 OK // status line Content-Type: text/html //header 开始 Date: Mon, 23 Dec 2019 Connection: Keep-alive Transfer-Encoding:chunked // header 结束

> //body