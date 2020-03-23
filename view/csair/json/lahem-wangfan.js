let lehem_wangfan = {
    "data": {
        "pullBlack": "1",
        "ticket": {
            "cachetime": "1580803555536",
            "createtime": "1580803555536",
            "codeshareflag": "true",
            "dateflight": [ //往返机票
                {
                    "flightnum": "2", //航班数目？
                    "sortprice": "",
                    "freightflag": "N",
                    "segment": [   //往返机票列表详情 去程 和返回
                        {
                            "flight": [
                                {
                                    "plane": "330", //去 航班号
                                    "arrtime": "2020-02-11T09:55", //去 到达时间
                                    "bookingclassavails": "Y:9,J:9",
                                    "duration": "PT9H10M", //去 历程时间
                                    "meal": "Y", //去 是否提供餐饮
                                    "depterm": "2",
                                    "flightNo": "CZ663", //去 飞行航班
                                    "codeshare": "false", //去 是否为共享航班
                                    "deptime": "2020-02-10T22:15",//去 到达时间
                                    "depport": "CAN", //去  出发城市
                                    "arrport": "ADL",//去 抵达城市
                                    "arrTerm": "1",
                                    "stopnumber": "0" //???
                                }
                            ],
                            "arrcity": "ADL", //抵达城市
                            "totalduration": "PT9H10M", //经历时长
                            "depcity": "CAN"//出发城市
                        },
                        {   //返回航班
                            "flight": [  //跟单程的flight相似  中转
                                {
                                    "plane": "73H",//来 航班号
                                    "arrtime": "2020-02-15T08:25",
                                    "bookingclassavails": "B:9",//来 
                                    "duration": "PT4H55M",
                                    "meal": "Y",
                                    "depterm": "1",
                                    "flightNo": "CZ7572",
                                    "ocflightno": "QF730",
                                    "codeshare": "true", //共享航班
                                    "deptime": "2020-02-15T06:00",
                                    "depport": "ADL",
                                    "arrport": "SYD",
                                    "arrTerm": "3",
                                    "stopnumber": "0"
                                },
                                {
                                    "plane": "330",
                                    "arrtime": "2020-02-15T17:40",
                                    "bookingclassavails": "B:2",
                                    "duration": "PT9H15M",
                                    "meal": "Y",
                                    "depterm": "1",
                                    "flightNo": "CZ326",
                                    "codeshare": "false",
                                    "deptime": "2020-02-15T11:25",
                                    "depport": "SYD",
                                    "arrport": "CAN",
                                    "arrTerm": "2",
                                    "stopnumber": "0"
                                }
                            ],
                            "arrcity": "CAN", //返回 抵达城市
                            "totalduration": "PT14H10M",  //返回 历时
                            "depcity": "ADL" //返回 出发城市
                        }
                    ],
                    "prices": [
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "B",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "B",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                }
                        ],
                          //成人 小孩 婴儿？
                          //价格 adultyq + adultcn + adultprice + adultxt
                            "adultcn": "90",
                            "passengertype": "ADT",
                            "arrlocation2": "CAN",
                            "adultprice": "17410",
                            "arrlocation1": "ADL",
                            "adultruleference4": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ001",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "ADL",
                            "adultruleference1": "caK0WYSZeuae6DUKPbETqiMii|rkey=Aou8WENuAyL27nZSO//g+3knyXJZCiqUKrvhGTRo5pVQ",
                            "adultruleference2": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ001",
                            "adultruleference3": "caK0WYSZeuae6DUKPbETqiMii|rkey=A6v4y5nSLoHjt3yWyS97Y61EFzkKzTscQxGRKGcjZ54A",
                            "adultxtdetail": "WY:252.0;YQ:56.0;AU:279.0;WG:16.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "683",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "B2KPPQQ"
                        },
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "B",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "B",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                }
                            ],
                            "adultcn": "90",
                            "passengertype": "ADT",
                            "arrlocation2": "CAN",
                            "adultprice": "17410",
                            "arrlocation1": "ADL",
                            "adultruleference4": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG001",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "ADL",
                            "adultruleference1": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=Aou8WENuAyL27nZSO//g+3knyXJZCiqUKrvhGTRo5pVQ",
                            "adultruleference2": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG001",
                            "adultruleference3": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=A6v4y5nSLoHjt3yWyS97Y61EFzkKzTscQxGRKGcjZ54A",
                            "adultxtdetail": "WY:252.0;YQ:56.0;AU:279.0;WG:16.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "683",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "B2KPPQQ"
                        }
                    ],
                    "serialno": "00"
                },
                {
                    "flightnum": "2",
                    "sortprice": "",
                    "freightflag": "N",
                    "segment": [
                        {
                            "flight": [
                                {
                                    "plane": "330",
                                    "arrtime": "2020-02-11T09:55",
                                    "bookingclassavails": "Y:9,J:9",
                                    "duration": "PT9H10M",
                                    "meal": "Y",
                                    "depterm": "2",
                                    "flightNo": "CZ663",
                                    "codeshare": "false",
                                    "deptime": "2020-02-10T22:15",
                                    "depport": "CAN",
                                    "arrport": "ADL",
                                    "arrTerm": "1",
                                    "stopnumber": "0"
                                }
                            ],
                            "arrcity": "ADL",
                            "totalduration": "PT9H10M",
                            "depcity": "CAN"
                        },
                        {
                            "flight": [
                                {
                                    "plane": "73H",
                                    "arrtime": "2020-02-15T21:00",
                                    "bookingclassavails": "Y:9,D:4",
                                    "duration": "PT17H10M",
                                    "meal": "Y",
                                    "depterm": "1",
                                    "flightNo": "CZ7574",
                                    "ocflightno": "QF766",
                                    "codeshare": "true",
                                    "deptime": "2020-02-15T18:35",
                                    "depport": "ADL",
                                    "arrport": "SYD",
                                    "arrTerm": "3",
                                    "stopnumber": "0"
                                },
                                {
                                    "plane": "788",
                                    "arrtime": "2020-02-16T18:30",
                                    "bookingclassavails": "H:9,C:9",
                                    "duration": "PT23H25M",
                                    "meal": "Y",
                                    "depterm": "1",
                                    "flightNo": "CZ4010",
                                    "ocflightno": "MF802",
                                    "codeshare": "true",
                                    "deptime": "2020-02-16T12:15",
                                    "depport": "SYD",
                                    "arrport": "XMN",
                                    "arrTerm": "3",
                                    "stopnumber": "0"
                                },
                                {
                                    "plane": "738",
                                    "arrtime": "2020-02-17T10:15",
                                    "bookingclassavails": "Y:9,J:8",
                                    "duration": "PT1H35M",
                                    "meal": "Y",
                                    "depterm": "3",
                                    "flightNo": "CZ5111",
                                    "ocflightno": "MF8311",
                                    "codeshare": "true",
                                    "deptime": "2020-02-17T08:40",
                                    "depport": "XMN",
                                    "arrport": "CAN",
                                    "arrTerm": "2",
                                    "stopnumber": "0"
                                }
                            ],
                            "arrcity": "CAN",
                            "totalduration": "PT42H10M",
                            "depcity": "ADL"
                        }
                    ],
                    "prices": [
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "XMN",
                                    "name": "H",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "XMN"
                                }
                            ],
                            "adultcn": "140",
                            "passengertype": "ADT",
                            "arrlocation2": "XMN;CAN",
                            "adultprice": "22930",
                            "arrlocation1": "SYD",
                            "adultruleference4": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ002;0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ002",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "SYD;XMN",
                            "adultruleference1": "caK0WYSZeuae6DUKPbETqiMii|rkey=AQ6egjrMLI1HatzdyIwnJK2PcCY2tpPlbI7/4q+Y7rKs",
                            "adultruleference2": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ002",
                            "adultruleference3": "caK0WYSZeuae6DUKPbETqiMii|rkey=Aed2kHxP1J/H6+BZTssOixbk0RzDGxaAY5xS44Z4GKUYrcU;caK0WYSZeuae6DUKPbETqiMii|rkey=Au3mZaFZuTtP879eSCNzINVFqBNm8HfawctQjJSwW2Ec",
                            "adultxtdetail": "WY:249.0;YQ:56.0;AU:279.0;WG:25.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "689",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ;CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "H4KRPQQ;YCN"
                        },
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "J",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "D",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "XMN",
                                    "name": "C",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "SYD"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "J",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "XMN"
                                }
                            ],
                            "adultcn": "140",
                            "passengertype": "ADT",
                            "arrlocation2": "XMN;CAN",
                            "adultprice": "50230",
                            "arrlocation1": "SYD",
                            "adultruleference4": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ005;0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ005",
                            "cabintype1": "BUSINESS",
                            "cabintype2": "BUSINESS",
                            "deplocation1": "CAN",
                            "deplocation2": "SYD;XMN",
                            "adultruleference1": "caK0WYSZeuae6DUKPbETqiMii|rkey=Au0KwZkn37YrNnWs7X3bgL3TGV8pDDdYnyhyMT8uTGIo",
                            "adultruleference2": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ005",
                            "adultruleference3": "caK0WYSZeuae6DUKPbETqiMii|rkey=AfFZLhHc9hWKyxnMIyCzLRWkPLYsGjaKdpUWht82GlPrE9E;caK0WYSZeuae6DUKPbETqiMii|rkey=ADA+7ib7Lx8Kc5RRPagQpJATTS1QtZhllewKKzvTEypU",
                            "adultxtdetail": "WY:249.0;YQ:56.0;AU:279.0;WG:25.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "689",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ;CZ",
                            "adultyq": "860",
                            "adultfarbasis": "J2PPQQ",
                            "adultfarbasis2": "C4RPQQ;JCN"
                        },
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "XMN",
                                    "name": "H",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "XMN"
                                }
                            ],
                            "adultcn": "140",
                            "passengertype": "ADT",
                            "arrlocation2": "XMN;CAN",
                            "adultprice": "22930",
                            "arrlocation1": "SYD",
                            "adultruleference4": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG002;0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG002",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "SYD;XMN",
                            "adultruleference1": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=AQ6egjrMLI1HatzdyIwnJK2PcCY2tpPlbI7/4q+Y7rKs",
                            "adultruleference2": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG002",
                            "adultruleference3": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=Aed2kHxP1J/H6+BZTssOixbk0RzDGxaAY5xS44Z4GKUYrcU;CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=Au3mZaFZuTtP879eSCNzINVFqBNm8HfawctQjJSwW2Ec",
                            "adultxtdetail": "WY:249.0;YQ:56.0;AU:279.0;WG:25.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "689",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ;CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "H4KRPQQ;YCN"
                        },
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "J",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "D",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "XMN",
                                    "name": "C",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "SYD"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "J",
                                    "freebaggage": "2PC",
                                    "type": "BUSINESS",
                                    "dep": "XMN"
                                }
                            ],
                            "adultcn": "140",
                            "passengertype": "ADT",
                            "arrlocation2": "XMN;CAN",
                            "adultprice": "50230",
                            "arrlocation1": "SYD",
                            "adultruleference4": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG005;0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG005",
                            "cabintype1": "BUSINESS",
                            "cabintype2": "BUSINESS",
                            "deplocation1": "CAN",
                            "deplocation2": "SYD;XMN",
                            "adultruleference1": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=Au0KwZkn37YrNnWs7X3bgL3TGV8pDDdYnyhyMT8uTGIo",
                            "adultruleference2": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG005",
                            "adultruleference3": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=AfFZLhHc9hWKyxnMIyCzLRWkPLYsGjaKdpUWht82GlPrE9E;CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=ADA+7ib7Lx8Kc5RRPagQpJATTS1QtZhllewKKzvTEypU",
                            "adultxtdetail": "WY:249.0;YQ:56.0;AU:279.0;WG:25.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "689",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ;CZ",
                            "adultyq": "860",
                            "adultfarbasis": "J2PPQQ",
                            "adultfarbasis2": "C4RPQQ;JCN"
                        }
                    ],
                    "serialno": "01"
                },
                {
                    "flightnum": "2",
                    "sortprice": "",
                    "freightflag": "N",
                    "segment": [
                        {
                            "flight": [
                                {
                                    "plane": "330",
                                    "arrtime": "2020-02-11T09:55",
                                    "bookingclassavails": "Y:9,J:9",
                                    "duration": "PT9H10M",
                                    "meal": "Y",
                                    "depterm": "2",
                                    "flightNo": "CZ663",
                                    "codeshare": "false",
                                    "deptime": "2020-02-10T22:15",
                                    "depport": "CAN",
                                    "arrport": "ADL",
                                    "arrTerm": "1",
                                    "stopnumber": "0"
                                }
                            ],
                            "arrcity": "ADL",
                            "totalduration": "PT9H10M",
                            "depcity": "CAN"
                        },
                        {
                            "flight": [
                                {
                                    "plane": "73H",
                                    "arrtime": "2020-02-15T21:00",
                                    "bookingclassavails": "Y:9",
                                    "duration": "PT16H20M",
                                    "meal": "Y",
                                    "depterm": "1",
                                    "flightNo": "CZ7574",
                                    "ocflightno": "QF766",
                                    "codeshare": "true",
                                    "deptime": "2020-02-15T18:35",
                                    "depport": "ADL",
                                    "arrport": "SYD",
                                    "arrTerm": "3",
                                    "stopnumber": "0"
                                },
                                {
                                    "plane": "330",
                                    "arrtime": "2020-02-16T17:40",
                                    "bookingclassavails": "Y:9",
                                    "duration": "PT9H15M",
                                    "meal": "Y",
                                    "depterm": "1",
                                    "flightNo": "CZ326",
                                    "codeshare": "false",
                                    "deptime": "2020-02-16T11:25",
                                    "depport": "SYD",
                                    "arrport": "CAN",
                                    "arrTerm": "2",
                                    "stopnumber": "0"
                                }
                            ],
                            "arrcity": "CAN",
                            "totalduration": "PT25H35M",
                            "depcity": "ADL"
                        }
                    ],
                    "prices": [
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                }
                            ],
                            "adultcn": "90",
                            "passengertype": "ADT",
                            "arrlocation2": "CAN",
                            "adultprice": "23560",
                            "arrlocation1": "ADL",
                            "adultruleference4": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ003",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "ADL",
                            "adultruleference1": "caK0WYSZeuae6DUKPbETqiMii|rkey=Aou8WENuAyL27nZSO//g+3knyXJZCiqUKrvhGTRo5pVQ",
                            "adultruleference2": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ003",
                            "adultruleference3": "caK0WYSZeuae6DUKPbETqiMii|rkey=Aou8WENuAyL27nZSO//g+3knyXJZCiqUKrvhGTRo5pVQ",
                            "adultxtdetail": "WY:252.0;YQ:56.0;AU:279.0;WG:25.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "692",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "Y2PPQQ"
                        },
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                }
                            ],
                            "adultcn": "90",
                            "passengertype": "ADT",
                            "arrlocation2": "CAN",
                            "adultprice": "23560",
                            "arrlocation1": "ADL",
                            "adultruleference4": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG003",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "ADL",
                            "adultruleference1": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=Aou8WENuAyL27nZSO//g+3knyXJZCiqUKrvhGTRo5pVQ",
                            "adultruleference2": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG003",
                            "adultruleference3": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=Aou8WENuAyL27nZSO//g+3knyXJZCiqUKrvhGTRo5pVQ",
                            "adultxtdetail": "WY:252.0;YQ:56.0;AU:279.0;WG:25.0;QR:80.0",
                            "adultcurrency": "CNY",
                            "adultxt": "692",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "Y2PPQQ"
                        }
                    ],
                    "serialno": "02"
                },
                {
                    "flightnum": "2",
                    "sortprice": "",
                    "freightflag": "N",
                    "segment": [
                        {
                            "flight": [
                                {
                                    "plane": "330",
                                    "arrtime": "2020-02-11T09:55",
                                    "bookingclassavails": "Y:9,J:9",
                                    "duration": "PT9H10M",
                                    "meal": "Y",
                                    "depterm": "2",
                                    "flightNo": "CZ663",
                                    "codeshare": "false",
                                    "deptime": "2020-02-10T22:15",
                                    "depport": "CAN",
                                    "arrport": "ADL",
                                    "arrTerm": "1",
                                    "stopnumber": "0"
                                }
                            ],
                            "arrcity": "ADL",
                            "totalduration": "PT9H10M",
                            "depcity": "CAN"
                        },
                        {
                            "flight": [
                                {
                                    "plane": "73H",
                                    "arrtime": "2020-02-15T08:25",
                                    "bookingclassavails": "Y:9",
                                    "duration": "PT4H30M",
                                    "meal": "Y",
                                    "depterm": "1",
                                    "flightNo": "CZ7572",
                                    "ocflightno": "QF730",
                                    "codeshare": "true",
                                    "deptime": "2020-02-15T06:00",
                                    "depport": "ADL",
                                    "arrport": "SYD",
                                    "arrTerm": "3",
                                    "stopnumber": "0"
                                },
                                {
                                    "plane": "73H",
                                    "arrtime": "2020-02-15T12:35",
                                    "bookingclassavails": "Y:9",
                                    "duration": "PT24H25M",
                                    "meal": "N",
                                    "depterm": "3",
                                    "flightNo": "CZ7555",
                                    "ocflightno": "QF427",
                                    "codeshare": "true",
                                    "deptime": "2020-02-15T11:00",
                                    "depport": "SYD",
                                    "arrport": "MEL",
                                    "arrTerm": "1",
                                    "stopnumber": "0"
                                },
                                {
                                    "plane": "330",
                                    "arrtime": "2020-02-16T18:05",
                                    "bookingclassavails": "Y:9",
                                    "duration": "PT9H40M",
                                    "meal": "Y",
                                    "depterm": "2",
                                    "flightNo": "CZ344",
                                    "codeshare": "false",
                                    "deptime": "2020-02-16T11:25",
                                    "depport": "MEL",
                                    "arrport": "CAN",
                                    "arrTerm": "2",
                                    "stopnumber": "0"
                                }
                            ],
                            "arrcity": "CAN",
                            "totalduration": "PT38H35M",
                            "depcity": "ADL"
                        }
                    ],
                    "prices": [
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "MEL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "MEL"
                                }
                            ],
                            "adultcn": "90",
                            "passengertype": "ADT",
                            "arrlocation2": "CAN",
                            "adultprice": "24970",
                            "arrlocation1": "SYD",
                            "adultruleference4": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ004",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "SYD",
                            "adultruleference1": "caK0WYSZeuae6DUKPbETqiMii|rkey=AQ6egjrMLI1HatzdyIwnJK2PcCY2tpPlbI7/4q+Y7rKs",
                            "adultruleference2": "0U2etZ1ckTnBSyTJAxps051/NaO0UrcOV07Qt5sFVbacpQ004",
                            "adultruleference3": "caK0WYSZeuae6DUKPbETqiMii|rkey=AQ6egjrMLI1HatzdyIwnJK2PcCY2tpPlbI7/4q+Y7rKs",
                            "adultxtdetail": "WY:205.0;YQ:56.0;AU:279.0;WG:35.0;QR:153.0",
                            "adultcurrency": "CNY",
                            "adultxt": "728",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "Y2PPQQ"
                        },
                        {
                            "adultcabins": [
                                {
                                    "arr": "ADL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "CAN"
                                },
                                {
                                    "arr": "SYD",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "ADL"
                                },
                                {
                                    "arr": "MEL",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "SYD"
                                },
                                {
                                    "arr": "CAN",
                                    "name": "Y",
                                    "freebaggage": "2PC",
                                    "type": "ECONOMY",
                                    "dep": "MEL"
                                }
                            ],
                            "adultcn": "90",
                            "passengertype": "ADT",
                            "arrlocation2": "CAN",
                            "adultprice": "24970",
                            "arrlocation1": "SYD",
                            "adultruleference4": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG004",
                            "cabintype1": "ECONOMY",
                            "cabintype2": "ECONOMY",
                            "deplocation1": "CAN",
                            "deplocation2": "SYD",
                            "adultruleference1": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=AQ6egjrMLI1HatzdyIwnJK2PcCY2tpPlbI7/4q+Y7rKs",
                            "adultruleference2": "0W0t39YSj4y8RMoBVBn6cH9/LBGtsU519PMVGbfvxIsEHG004",
                            "adultruleference3": "CNB0WYSZMZbW3zkhbVnNsk5Gr|rkey=AQ6egjrMLI1HatzdyIwnJK2PcCY2tpPlbI7/4q+Y7rKs",
                            "adultxtdetail": "WY:205.0;YQ:56.0;AU:279.0;WG:35.0;QR:153.0",
                            "adultcurrency": "CNY",
                            "adultxt": "728",
                            "filingairline1": "CZ",
                            "filingairline2": "CZ",
                            "adultyq": "860",
                            "adultfarbasis": "Y2PPQQ",
                            "adultfarbasis2": "Y2PPQQ"
                        }
                    ],
                    "serialno": "03"
                }
            ],
            "flag": "false",
            "minprice": "19043",
            "flightnumflag": "false",
            "id": "7By7Query:CANADL20200210202002150CZBTOC0",
            "mileAge": [
                {
                    "mileAgeListGo": [
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "A",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "A",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "A",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "A",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "A",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "B",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "B",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "B",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "B",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "B",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 13990,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "CAN",
                            "clazz": "C",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 13990,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "C",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 15040,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "CAN",
                            "clazz": "C",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 16089,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "CAN",
                            "clazz": "C",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 17488,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "CAN",
                            "clazz": "C",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "CAN",
                            "clazz": "D",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "D",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 11543,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "CAN",
                            "clazz": "D",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 12592,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "CAN",
                            "clazz": "D",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 13991,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "CAN",
                            "clazz": "D",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "E",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "E",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "E",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "E",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "E",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 20985,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "CAN",
                            "clazz": "F",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 20985,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "F",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 22035,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "CAN",
                            "clazz": "F",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 23084,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "CAN",
                            "clazz": "F",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 24483,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "CAN",
                            "clazz": "F",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "G",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "G",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1050,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "G",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2099,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "G",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "G",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "H",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "H",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "H",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "H",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "H",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "I",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "I",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "I",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "I",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "I",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 17488,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "CAN",
                            "clazz": "J",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 17488,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "J",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 18538,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "CAN",
                            "clazz": "J",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 19587,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "CAN",
                            "clazz": "J",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 20986,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "CAN",
                            "clazz": "J",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "K",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "K",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "K",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "K",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "K",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "L",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "L",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "L",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "L",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "L",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "M",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "M",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "M",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "M",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "M",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "N",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "N",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "N",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "N",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "N",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "O",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "O",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1050,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "O",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2099,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "O",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "O",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "P",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "P",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "P",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "P",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "P",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "Q",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "Q",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "Q",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "Q",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "Q",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "R",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "R",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "R",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "R",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "R",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "CAN",
                            "clazz": "S",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "S",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6297,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "CAN",
                            "clazz": "S",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 7346,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "CAN",
                            "clazz": "S",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8745,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "CAN",
                            "clazz": "S",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "T",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "T",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "T",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "T",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "T",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "U",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "U",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "U",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "U",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "CAN",
                            "clazz": "U",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "V",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "V",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "V",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "V",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "V",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 7695,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "CAN",
                            "clazz": "W",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 7695,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "W",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8745,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "CAN",
                            "clazz": "W",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9794,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "CAN",
                            "clazz": "W",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 11193,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "CAN",
                            "clazz": "W",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "X",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "X",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1050,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "X",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2099,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "X",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "X",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "Y",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "Y",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "Y",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "Y",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "CAN",
                            "clazz": "Y",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "Z",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "CAN",
                            "clazz": "Z",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "Z",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "Z",
                            "dep": "ADL"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "CAN",
                            "clazz": "Z",
                            "dep": "ADL"
                        }
                    ],
                    "mileAgeListBack": [
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "A",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "A",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "A",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "A",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "A",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "B",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "B",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "B",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "B",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "B",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 13990,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "ADL",
                            "clazz": "C",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 13990,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "C",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 15040,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "ADL",
                            "clazz": "C",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 16089,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "ADL",
                            "clazz": "C",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 17488,
                            "upNumber": 2,
                            "upCount": 13990,
                            "dest": "ADL",
                            "clazz": "C",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "ADL",
                            "clazz": "D",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "D",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 11543,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "ADL",
                            "clazz": "D",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 12592,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "ADL",
                            "clazz": "D",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 13991,
                            "upNumber": 2,
                            "upCount": 10493,
                            "dest": "ADL",
                            "clazz": "D",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "E",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "E",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "E",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "E",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "E",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 20985,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "ADL",
                            "clazz": "F",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 20985,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "F",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 22035,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "ADL",
                            "clazz": "F",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 23084,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "ADL",
                            "clazz": "F",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 24483,
                            "upNumber": 2,
                            "upCount": 20985,
                            "dest": "ADL",
                            "clazz": "F",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "G",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "G",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1050,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "G",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2099,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "G",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "G",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "H",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "H",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "H",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "H",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "H",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "I",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "I",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "I",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "I",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 2,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "I",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 17488,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "ADL",
                            "clazz": "J",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 17488,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "J",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 18538,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "ADL",
                            "clazz": "J",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 19587,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "ADL",
                            "clazz": "J",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 20986,
                            "upNumber": 2,
                            "upCount": 17488,
                            "dest": "ADL",
                            "clazz": "J",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "K",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "K",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "K",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "K",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "K",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "L",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "L",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "L",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "L",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "L",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "M",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "M",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "M",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "M",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "M",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "N",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "N",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "N",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "N",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "N",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "O",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "O",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1050,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "O",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2099,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "O",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "O",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "P",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "P",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "P",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "P",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "P",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "Q",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "Q",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "Q",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "Q",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "Q",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "R",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "R",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "R",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "R",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "R",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "ADL",
                            "clazz": "S",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "S",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6297,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "ADL",
                            "clazz": "S",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 7346,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "ADL",
                            "clazz": "S",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8745,
                            "upNumber": 1,
                            "upCount": 5247,
                            "dest": "ADL",
                            "clazz": "S",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "T",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "T",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "T",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "T",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "T",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "U",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "U",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 4548,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "U",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5597,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "U",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6996,
                            "upNumber": 0,
                            "upCount": 3498,
                            "dest": "ADL",
                            "clazz": "U",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "V",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "V",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "V",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "V",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "V",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 7695,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "ADL",
                            "clazz": "W",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 7695,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "W",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8745,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "ADL",
                            "clazz": "W",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9794,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "ADL",
                            "clazz": "W",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 11193,
                            "upNumber": 1.5,
                            "upCount": 7695,
                            "dest": "ADL",
                            "clazz": "W",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "X",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 0,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "X",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1050,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "X",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2099,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "X",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3498,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "X",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "Y",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 6995,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "Y",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 8045,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "Y",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 9094,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "Y",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 10493,
                            "upNumber": 1.5,
                            "upCount": 6995,
                            "dest": "ADL",
                            "clazz": "Y",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "Z",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 1749,
                            "upNumber": 0,
                            "upCount": 0,
                            "dest": "ADL",
                            "clazz": "Z",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 2799,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "Z",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 3848,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "Z",
                            "dep": "CAN"
                        },
                        {
                            "loyaltyId": 0,
                            "basicCount": 5247,
                            "upNumber": 0,
                            "upCount": 1749,
                            "dest": "ADL",
                            "clazz": "Z",
                            "dep": "CAN"
                        }
                    ]
                }
            ],
            "airports": [
                {
                    "code": "XMN",
                    "zhName": "厦门",
                    "city": "XMN",
                    "enName": "Gaoqi Airport"
                },
                {
                    "code": "SYD",
                    "zhName": "悉尼金斯福德史密斯机场",
                    "city": "SYD",
                    "enName": "Kingsford Smith Airport"
                },
                {
                    "code": "ADL",
                    "zhName": "阿德莱德机场",
                    "city": "ADL",
                    "enName": "ADELAIDE Airport"
                },
                {
                    "code": "CAN",
                    "zhName": "广州",
                    "city": "CAN",
                    "enName": "Guangzhou Baiyun Airport"
                },
                {
                    "code": "MEL",
                    "zhName": "墨尔本机场",
                    "city": "MEL",
                    "enName": "Melbourne Airport"
                }
            ],
            "cities": [
              {
                  "code": "XMN",
                  "zhName": "厦门",
                  "enName": "Xiamen"
              },
              {
                  "code": "SYD",
                  "zhName": "悉尼",
                  "enName": "Sydney"
              },
              {
                  "code": "ADL",
                  "zhName": "阿德莱德",
                  "enName": "ADELAIDE"
              },
              {
                  "code": "CAN",
                  "zhName": "广州",
                  "enName": "Guangzhou"
              },
              {
                  "code": "MEL",
                  "zhName": "墨尔本",
                  "enName": "Melbourne"
              }
            ],
            "planes": [
                {
                    "planetype": "738",
                    "enplanename": "B737",
                    "zhplanename": "波音737"
                },
                {
                    "planetype": "73H",
                    "enplanename": "73H",
                    "zhplanename": "73H"
                },
                {
                    "planetype": "788",
                    "enplanename": "Boeing 787-8",
                    "zhplanename": "波音787-8"
                },
                {
                    "planetype": "330",
                    "enplanename": "A330",
                    "zhplanename": "空客330"
                }
            ]
        }
    }
}