package com.eden.mianshi;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by tfw2302 on 2016/11/21.
 */
public class Demo01 {

    public static void main(String[] args) {
        Map map = new HashMap<String,String>();
        map.put("1", "1");
        map.put("2", "2");
        map.get("1");

        System.out.println((1 & 1) == 1 ? 0 : 1);

        System.out.println(1 >>> 2);
        System.out.println(1 << 2);
        System.out.println(4 >> 2);
    }

}
