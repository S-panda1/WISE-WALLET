#open monodb compass click connect
import pandas as pd
import pymongo as pm

client=pm.MongoClient("mongodb://localhost:27017")

db=client["wisewallet"]

mycollection=db["notes"]

all_records=mycollection.find() #stores all the records from dataset

list_cursor=list(all_records)

df=pd.DataFrame(list_cursor)

weeks={'week1','week2','week3','week4'}
rec=[]
for week in weeks:
    dflist=['weight',week]
    df['sums']=df[dflist].mul(axis=1)
    sum1=df['weight'].sum()
    sum2=df['sums'].sum()
    sum3=df[week].sum()
    rec[week]=sum2/sum1
pred=sum3/df.shape[1]
