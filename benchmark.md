### Hosts

* Host 1: Asus Intel© Core™ i3-7100U CPU @ 2.40GHz × 2  Ram: 11.6 GiB  Disco: SSD
* Host 2: Lenovo Intel© Core™ i7-8550U CPU @ 1.80GHz × 4 Ram: 19 GiB  Disco: SSD
* Host 3: Heroku

### Prueba 1

Obtener todos los usuarios sin posts. Cantidad 250 Requests, 1 usuario concurrente.

#### Host 1

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users
Document Length:        3160 bytes

Concurrency Level:      1
Time taken for tests:   1.578 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      851750 bytes
HTML transferred:       790000 bytes
Requests per second:    158.38 [#/sec] (mean)
Time per request:       6.314 [ms] (mean)
Time per request:       6.314 [ms] (mean, across all concurrent requests)
Transfer rate:          526.95 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     3    6   5.7      4      61
Waiting:        3    6   5.7      4      61
Total:          3    6   5.7      4      61

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      6
  75%      7
  80%      8
  90%     12
  95%     17
  98%     23
  99%     25
 100%     61 (longest request)
```
#### Host 2

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users
Document Length:        3160 bytes

Concurrency Level:      1
Time taken for tests:   1.054 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      851750 bytes
HTML transferred:       790000 bytes
Requests per second:    237.27 [#/sec] (mean)
Time per request:       4.215 [ms] (mean)
Time per request:       4.215 [ms] (mean, across all concurrent requests)
Transfer rate:          789.42 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     2    4   2.5      4      35
Waiting:        2    4   2.5      4      35
Total:          2    4   2.5      4      35

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      5
  80%      5
  90%      6
  95%      7
  98%      9
  99%     12
 100%     35 (longest request)
```

#### Host 3

```
Server Software:        Cowboy
Server Hostname:        benchmark-node.herokuapp.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128
TLS Server Name:        benchmark-node.herokuapp.com

Document Path:          /users
Document Length:        3160 bytes

Concurrency Level:      1
Time taken for tests:   73.990 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    248
Total transferred:      859740 bytes
HTML transferred:       790000 bytes
Requests per second:    3.38 [#/sec] (mean)
Time per request:       295.960 [ms] (mean)
Time per request:       295.960 [ms] (mean, across all concurrent requests)
Transfer rate:          11.35 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    9  80.2      0     821
Processing:   184  287 186.3    229    1440
Waiting:      184  287 186.3    229    1440
Total:        184  296 200.4    231    1440

Percentage of the requests served within a certain time (ms)
  50%    231
  66%    285
  75%    304
  80%    308
  90%    330
  95%    837
  98%   1130
  99%   1220
 100%   1440 (longest request)
```

### Prueba 2

Obtener todos los usuarios sin posts. Cantidad 250 Requests, 20 usuarios concurrentes.

#### Host 1

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users
Document Length:        3160 bytes

Concurrency Level:      20
Time taken for tests:   1.661 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      851750 bytes
HTML transferred:       790000 bytes
Requests per second:    150.51 [#/sec] (mean)
Time per request:       132.881 [ms] (mean)
Time per request:       6.644 [ms] (mean, across all concurrent requests)
Transfer rate:          500.77 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0       2
Processing:    57  131  31.9    124     288
Waiting:       57  131  31.9    124     288
Total:         57  131  32.1    124     289

Percentage of the requests served within a certain time (ms)
  50%    124
  66%    135
  75%    144
  80%    150
  90%    172
  95%    191
  98%    233
  99%    261
 100%    289 (longest request)
```

#### Host 2

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users
Document Length:        3160 bytes

Concurrency Level:      20
Time taken for tests:   0.814 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      851750 bytes
HTML transferred:       790000 bytes
Requests per second:    307.09 [#/sec] (mean)
Time per request:       65.127 [ms] (mean)
Time per request:       3.256 [ms] (mean, across all concurrent requests)
Transfer rate:          1021.74 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       1
Processing:    29   64  13.1     63     123
Waiting:       29   64  13.1     63     123
Total:         29   64  13.2     63     123

Percentage of the requests served within a certain time (ms)
  50%     63
  66%     65
  75%     68
  80%     69
  90%     80
  95%     86
  98%    112
  99%    122
 100%    123 (longest request)
```

#### Host 3

```
Server Software:        Cowboy
Server Hostname:        benchmark-node.herokuapp.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128
TLS Server Name:        benchmark-node.herokuapp.com

Document Path:          /users
Document Length:        3160 bytes

Concurrency Level:      20
Time taken for tests:   6.577 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      859750 bytes
HTML transferred:       790000 bytes
Requests per second:    38.01 [#/sec] (mean)
Time per request:       526.154 [ms] (mean)
Time per request:       26.308 [ms] (mean, across all concurrent requests)
Transfer rate:          127.66 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0  155 568.1      0    3110
Processing:   179  366 178.7    310    1012
Waiting:      179  366 178.7    310    1012
Total:        179  521 644.6    310    3924

Percentage of the requests served within a certain time (ms)
  50%    310
  66%    364
  75%    457
  80%    484
  90%    916
  95%   2411
  98%   3109
  99%   3923
 100%   3924 (longest request)
```

### Prueba 3

Obtener todos los usuarios con posts. Cantidad 250 Requests, 1 usuario concurrente.

#### Host 1

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users_with_posts
Document Length:        258456 bytes

Concurrency Level:      1
Time taken for tests:   10.013 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      64676750 bytes
HTML transferred:       64614000 bytes
Requests per second:    24.97 [#/sec] (mean)
Time per request:       40.054 [ms] (mean)
Time per request:       40.054 [ms] (mean, across all concurrent requests)
Transfer rate:          6307.59 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:    18   40  10.7     38     142
Waiting:       18   40  10.7     38     142
Total:         18   40  10.7     38     142

Percentage of the requests served within a certain time (ms)
  50%     38
  66%     42
  75%     44
  80%     46
  90%     51
  95%     53
  98%     63
  99%     66
 100%    142 (longest request)

```

#### Host 2

```
Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Finished 250 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users_with_posts
Document Length:        258456 bytes

Concurrency Level:      1
Time taken for tests:   6.102 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      64676750 bytes
HTML transferred:       64614000 bytes
Requests per second:    40.97 [#/sec] (mean)
Time per request:       24.406 [ms] (mean)
Time per request:       24.406 [ms] (mean, across all concurrent requests)
Transfer rate:          10351.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:    17   24   6.9     22      86
Waiting:       17   24   6.9     22      85
Total:         17   24   6.9     22      86

Percentage of the requests served within a certain time (ms)
  50%     22
  66%     25
  75%     27
  80%     28
  90%     33
  95%     35
  98%     43
  99%     47
 100%     86 (longest request)
```

#### Host 3

```
apr_pollset_poll: The timeout specified has expired (70007)
```

### Prueba 4

Obtener todos los usuarios con posts. Cantidad 250 Requests, 20 usuarios concurrentes.

#### Host 1

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users_with_posts
Document Length:        258456 bytes

Concurrency Level:      20
Time taken for tests:   9.400 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      64676750 bytes
HTML transferred:       64614000 bytes
Requests per second:    26.59 [#/sec] (mean)
Time per request:       752.021 [ms] (mean)
Time per request:       37.601 [ms] (mean, across all concurrent requests)
Transfer rate:          6719.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.6      0       5
Processing:   161  732  88.1    743    1035
Waiting:      161  731  88.1    743    1034
Total:        166  732  87.8    743    1036

Percentage of the requests served within a certain time (ms)
  50%    743
  66%    758
  75%    766
  80%    770
  90%    783
  95%    817
  98%    900
  99%    941
 100%   1036 (longest request)
```

#### Host 2

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users_with_posts
Document Length:        258456 bytes

Concurrency Level:      20
Time taken for tests:   5.834 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      64676750 bytes
HTML transferred:       64614000 bytes
Requests per second:    42.85 [#/sec] (mean)
Time per request:       466.732 [ms] (mean)
Time per request:       23.337 [ms] (mean, across all concurrent requests)
Transfer rate:          10826.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       1
Processing:   164  451  62.2    448     711
Waiting:      164  451  62.2    448     711
Total:        165  451  62.1    448     711

Percentage of the requests served within a certain time (ms)
  50%    448
  66%    463
  75%    467
  80%    477
  90%    520
  95%    562
  98%    613
  99%    629
 100%    711 (longest request)
```

#### Host 3

```
```

### Prueba 5

Obtener al usuario numero 5 con sus posts. Cantidad 250 Requests, 20 usuarios concurrentes.

#### Host 1

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users_with_posts/5
Document Length:        12450 bytes

Concurrency Level:      20
Time taken for tests:   2.022 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      3174750 bytes
HTML transferred:       3112500 bytes
Requests per second:    123.62 [#/sec] (mean)
Time per request:       161.783 [ms] (mean)
Time per request:       8.089 [ms] (mean, across all concurrent requests)
Transfer rate:          1533.09 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0       2
Processing:    82  159  38.8    160     335
Waiting:       82  159  38.8    160     334
Total:         82  159  39.0    160     335

Percentage of the requests served within a certain time (ms)
  50%    160
  66%    165
  75%    170
  80%    172
  90%    192
  95%    228
  98%    295
  99%    334
 100%    335 (longest request)
```

#### Host 2

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users_with_posts/5
Document Length:        12450 bytes

Concurrency Level:      20
Time taken for tests:   1.086 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      3174750 bytes
HTML transferred:       3112500 bytes
Requests per second:    230.28 [#/sec] (mean)
Time per request:       86.850 [ms] (mean)
Time per request:       4.343 [ms] (mean, across all concurrent requests)
Transfer rate:          2855.80 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       1
Processing:    39   86  20.2     81     169
Waiting:       39   86  20.2     81     169
Total:         39   86  20.3     81     169

Percentage of the requests served within a certain time (ms)
  50%     81
  66%     88
  75%     97
  80%     99
  90%    109
  95%    121
  98%    145
  99%    160
 100%    169 (longest request)
```

#### Host 3

```
Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /users_with_posts/5
Document Length:        12450 bytes

Concurrency Level:      20
Time taken for tests:   1.517 seconds
Complete requests:      250
Failed requests:        0
Keep-Alive requests:    250
Total transferred:      3174750 bytes
HTML transferred:       3112500 bytes
Requests per second:    164.84 [#/sec] (mean)
Time per request:       121.333 [ms] (mean)
Time per request:       6.067 [ms] (mean, across all concurrent requests)
Transfer rate:          2044.18 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.6      0       2
Processing:    58  119  21.9    120     219
Waiting:       58  119  21.9    120     219
Total:         58  120  22.1    120     221

Percentage of the requests served within a certain time (ms)
  50%    120
  66%    125
  75%    130
  80%    131
  90%    137
  95%    148
  98%    210
  99%    211
 100%    221 (longest request)
```


