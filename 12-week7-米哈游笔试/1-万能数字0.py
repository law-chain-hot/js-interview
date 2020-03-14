# 题目描述

'''
给定一组数字（每个数字取值范围为0~100，可重复出现，其中0为万能数字，可以代表其他任何数字），判断它们是否是连续数字集合。
例如：
3 5 4 2 和3 5 0 2（让0代表4）和3 6 0 0 （一个0代表4，另外一个代表5）和3 0（让0代表2或4都可以）均为连续数字组合。而3 5 2和3 5 0 1和3 7 0 0和3 3 4 5（有重复的3）均不是连续数字集合。
————————————————
版权声明：本文为CSDN博主「钰捷」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_43434305/article/details/102491494
'''


raw_input = input()
# raw_input = "1 3 4 0 "
n_zero = 0 # count 0
diff = [] # array 各项相减

arr = [int(n) for n in raw_input.split()]
arr.sort()
index_no_zero = 0
num_zero = 0

# get the index of first 0
for i in range(len(arr)):
    if arr[i] != 0:
        index_no_zero = i
        break
    else:
        num_zero += 1


sum_arr = 0
temp = 0
flag = 0
for i in range(index_no_zero, len(arr) - 1):
    if arr[i+1] - arr[i] == 0:
        flag = 1
    sum_arr += arr[i+1] - arr[i] - 1



if flag:
    print ('no')
elif sum_arr == 0 or sum_arr <= num_zero:
    print ('yes')
elif sum_arr > num_zero:
    print('no')

# print (arr)