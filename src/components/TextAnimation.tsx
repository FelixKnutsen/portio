import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextAnimation: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();

      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 4,
        ease: "power2.inOut",
      });

      gsap.to(path, {
        fill: "#FFFFFF",
        duration: 1,
        delay: 1,
      });
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0a001f",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 400"
        width="100%"
        height="auto"
      >
        <path
          ref={pathRef}
          style={{
            transition: "fill 1s ease-in-out",
            stroke: "white",
            fill: "transparent",
            strokeWidth: 2,
          }}
          d="M 673.00,52.00
   C 673.00,52.00 686.00,52.00 686.00,52.00
     686.00,52.00 686.00,338.00 686.00,338.00
     686.00,338.00 673.00,338.00 673.00,338.00
     673.00,338.00 673.00,52.00 673.00,52.00 Z
   M 21.00,68.00
   C 21.00,68.00 36.00,68.00 36.00,68.00
     36.00,68.00 47.67,103.00 47.67,103.00
     47.67,103.00 73.33,179.00 73.33,179.00
     73.33,179.00 104.66,271.00 104.66,271.00
     104.66,271.00 121.00,319.00 121.00,319.00
     122.18,311.33 126.08,302.43 128.66,295.00
     128.66,295.00 143.31,253.00 143.31,253.00
     143.31,253.00 187.67,126.00 187.67,126.00
     187.67,126.00 203.42,81.00 203.42,81.00
     207.19,70.92 206.64,68.26 213.02,68.02
     223.04,67.63 221.63,69.41 226.34,83.00
     226.34,83.00 241.67,127.00 241.67,127.00
     241.67,127.00 282.66,244.00 282.66,244.00
     282.66,244.00 309.00,319.00 309.00,319.00
     310.13,311.68 317.11,292.77 319.95,285.00
     319.95,285.00 333.95,244.00 333.95,244.00
     333.95,244.00 344.69,212.00 344.69,212.00
     344.69,212.00 374.67,125.00 374.67,125.00
     374.67,125.00 389.33,82.00 389.33,82.00
     393.62,69.14 392.88,68.12 400.00,68.00
     400.00,68.00 408.00,68.00 408.00,68.00
     408.00,68.00 394.31,108.00 394.31,108.00
     394.31,108.00 355.66,221.00 355.66,221.00
     355.66,221.00 328.33,301.00 328.33,301.00
     328.33,301.00 316.00,338.00 316.00,338.00
     316.00,338.00 309.00,338.00 309.00,338.00
     300.86,337.95 301.60,337.76 296.67,323.00
     296.67,323.00 281.33,279.00 281.33,279.00
     281.33,279.00 241.34,165.00 241.34,165.00
     241.34,165.00 214.00,87.00 214.00,87.00
     212.82,94.63 209.48,101.73 207.00,109.00
     207.00,109.00 192.00,152.00 192.00,152.00
     192.00,152.00 161.69,239.00 161.69,239.00
     161.69,239.00 146.42,283.00 146.42,283.00
     146.42,283.00 133.67,320.00 133.67,320.00
     132.62,323.14 129.04,334.50 127.16,336.40
     125.21,338.38 117.80,338.47 115.22,337.71
     111.23,336.53 108.64,324.91 107.33,321.00
     107.33,321.00 90.67,272.00 90.67,272.00
     90.67,272.00 21.00,68.00 21.00,68.00 Z
   M 591.00,298.00
   C 593.38,300.41 598.16,304.17 596.83,308.00
     595.84,310.86 590.40,315.08 588.00,317.13
     579.99,323.99 569.02,330.32 559.00,333.67
     527.01,344.34 488.31,339.85 461.00,319.52
     443.42,306.44 430.55,286.34 425.50,265.00
     422.48,252.23 422.85,240.97 423.00,228.00
     423.31,201.98 437.43,174.05 457.00,157.30
     486.18,132.32 534.82,130.08 567.00,150.54
     582.48,160.39 592.23,172.74 600.24,189.00
     609.02,206.81 610.00,220.68 610.00,240.00
     610.00,240.00 493.00,240.00 493.00,240.00
     493.00,240.00 457.00,240.00 457.00,240.00
     457.00,240.00 435.00,241.00 435.00,241.00
     435.00,241.00 438.50,263.00 438.50,263.00
     440.61,271.93 444.53,280.29 449.44,288.00
     471.54,322.72 519.01,336.39 557.00,321.54
     577.65,313.46 579.50,306.23 591.00,298.00 Z
   M 911.00,297.00
   C 923.51,302.34 921.73,307.47 912.91,315.57
     904.73,323.09 896.26,328.24 886.00,332.40
     858.61,343.49 822.82,340.87 797.00,326.69
     740.30,295.54 732.24,210.28 776.04,165.00
     792.99,147.48 817.62,137.04 842.00,137.00
     842.00,137.00 855.00,137.00 855.00,137.00
     872.15,137.20 893.68,144.29 907.00,155.09
     910.48,157.91 920.82,166.12 920.10,170.96
     919.79,173.06 917.56,174.92 915.98,176.15
     914.19,177.54 913.02,178.09 911.00,179.00
     894.88,156.48 869.51,148.69 843.00,149.00
     829.54,149.16 811.22,155.35 800.00,162.70
     751.73,194.28 748.65,269.07 791.00,306.83
     823.26,335.59 885.69,334.66 911.00,297.00 Z
   M 1041.00,137.42
   C 1072.95,133.52 1106.11,143.67 1127.83,168.00
     1142.05,183.93 1151.97,208.56 1152.00,230.00
     1152.00,230.00 1152.00,247.00 1152.00,247.00
     1151.68,273.84 1135.65,304.76 1114.00,320.41
     1092.50,335.95 1072.77,339.30 1047.00,339.00
     1039.13,338.90 1028.50,336.48 1021.00,334.00
     989.27,323.51 966.80,298.38 958.90,266.00
     955.77,253.19 955.85,243.94 956.00,231.00
     956.18,216.02 961.27,198.07 968.51,185.00
     981.12,162.25 1001.92,146.39 1027.00,139.75
     1027.00,139.75 1041.00,137.42 1041.00,137.42 Z
   M 1229.00,184.00
   C 1231.81,172.06 1242.43,160.56 1252.00,153.37
     1272.75,137.79 1290.22,136.71 1315.00,137.00
     1325.93,137.13 1340.57,141.26 1350.00,146.75
     1361.55,153.46 1371.12,163.74 1376.56,176.00
     1376.56,176.00 1382.00,190.00 1382.00,190.00
     1385.84,173.67 1399.18,158.86 1413.00,150.05
     1433.33,137.10 1449.95,136.73 1473.00,137.00
     1494.62,137.26 1515.69,148.59 1528.22,166.00
     1543.15,186.75 1542.00,209.98 1542.00,234.00
     1542.00,234.00 1542.00,338.00 1542.00,338.00
     1542.00,338.00 1529.00,338.00 1529.00,338.00
     1529.00,338.00 1529.00,215.00 1529.00,215.00
     1528.97,196.13 1520.86,174.54 1506.00,162.47
     1484.15,144.71 1446.94,145.25 1423.00,158.51
     1415.45,162.70 1408.97,168.41 1403.44,175.00
     1384.12,198.02 1385.00,222.97 1385.00,251.00
     1385.00,251.00 1385.00,338.00 1385.00,338.00
     1385.00,338.00 1372.00,338.00 1372.00,338.00
     1372.00,338.00 1372.00,221.00 1372.00,221.00
     1371.97,203.16 1367.08,181.57 1354.68,168.17
     1335.17,147.08 1299.65,144.09 1274.00,154.45
     1262.61,159.05 1252.80,166.47 1245.09,176.00
     1227.00,198.38 1228.00,222.16 1228.00,249.00
     1228.00,249.00 1228.00,338.00 1228.00,338.00
     1228.00,338.00 1215.00,338.00 1215.00,338.00
     1215.00,338.00 1215.00,138.00 1215.00,138.00
     1215.00,138.00 1228.00,138.00 1228.00,138.00
     1228.00,138.00 1228.00,167.00 1228.00,167.00
     1228.00,167.00 1229.00,184.00 1229.00,184.00 Z
   M 1771.00,298.00
   C 1773.39,300.42 1778.16,304.17 1776.83,308.00
     1775.92,310.65 1770.27,315.66 1768.00,317.56
     1759.03,325.09 1749.01,330.32 1738.00,334.14
     1707.11,344.86 1667.19,338.77 1641.00,319.24
     1592.11,282.79 1589.72,197.93 1636.00,158.30
     1650.53,145.86 1671.76,137.09 1691.00,137.00
     1691.00,137.00 1704.00,137.00 1704.00,137.00
     1712.96,137.11 1721.63,139.32 1730.00,142.31
     1753.27,150.62 1770.35,166.49 1780.69,189.00
     1788.43,205.84 1791.00,221.60 1791.00,240.00
     1791.00,240.00 1616.00,240.00 1616.00,240.00
     1616.03,274.99 1636.14,307.24 1669.00,320.55
     1682.99,326.22 1694.24,327.02 1709.00,327.00
     1724.51,326.98 1742.42,321.33 1755.00,312.22
     1755.00,312.22 1771.00,298.00 1771.00,298.00 Z
   M 1778.00,229.00
   C 1777.76,202.42 1761.90,173.38 1739.00,159.76
     1714.06,144.91 1679.94,144.91 1655.00,159.76
     1636.77,170.61 1624.02,189.58 1618.89,210.00
     1618.89,210.00 1616.00,229.00 1616.00,229.00
     1616.00,229.00 1778.00,229.00 1778.00,229.00 Z
   M 598.00,229.00
   C 595.73,200.98 582.75,174.21 558.00,159.45
     528.43,141.81 485.89,145.92 461.04,170.09
     445.67,185.03 436.47,207.63 436.00,229.00
     436.00,229.00 598.00,229.00 598.00,229.00 Z
   M 1043.00,149.30
   C 1010.96,155.25 988.13,169.71 975.45,201.00
     971.39,211.03 969.05,225.18 969.00,236.00
     968.82,275.89 987.04,310.60 1027.00,322.98
     1032.76,324.76 1042.05,326.93 1048.00,327.00
     1066.01,327.21 1080.87,325.37 1097.00,316.49
     1146.02,289.48 1152.84,213.53 1115.71,174.09
     1096.95,154.16 1069.69,146.65 1043.00,149.30 Z
   M 1842.00,314.85
   C 1846.74,313.55 1851.69,313.46 1855.67,316.80
     1862.85,322.81 1860.81,334.88 1852.00,338.26
     1837.37,343.87 1826.37,323.44 1842.00,314.85 Z"
        />
      </svg>
    </div>
  );
};

export default TextAnimation;
