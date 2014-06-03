ReverseCounter
==============

Simple reverse counter v0.2

functions:
    init_counter(container,day,month,year,hour,min,sec,style);
        container - id or class counter container,
        day,month,year,hour,min,sec - stop time,
        style - 0 || 1 (0 - two digit black style, 1 - one digit white style).
    week_counter(container,to,h,m,s,style);
        container - id or class counter container,
        to - day of week(from 0 to 7, but 7 replace to 0),
        h,m,s - stop time,
        style - 0 || 1 (0 - two digit black style, 1 - one digit white style).
