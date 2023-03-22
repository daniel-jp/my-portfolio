import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { ReactNode } from 'react';

const Logo = (props: any) => {
  return (
    <svg width="100" height="32" viewBox="0 0 2001 2000" fill="none" xmlns="http://www.w3.org/2000/svg"
                  {...props}>
              <path d="M0.5 0H2000.5V2000H0.5V0Z" fill="url(#paint0_linear_220_96)"/>
              <path d="M984.753 1204H726.941V476.727H986.884C1060.04 476.727 1123.01 491.287 1175.8 520.406C1228.6 549.289 1269.2 590.837 1297.61 645.051C1326.25 699.265 1340.58 764.133 1340.58 839.653C1340.58 915.411 1326.25 980.515 1297.61 1034.97C1269.2 1089.42 1228.36 1131.2 1175.09 1160.32C1122.06 1189.44 1058.62 1204 984.753 1204ZM880.705 1072.25H978.361C1023.82 1072.25 1062.05 1064.2 1093.06 1048.11C1124.31 1031.77 1147.75 1006.56 1163.38 972.466C1179.24 938.138 1187.17 893.867 1187.17 839.653C1187.17 785.913 1179.24 741.997 1163.38 707.906C1147.75 673.815 1124.43 648.721 1093.42 632.622C1062.4 616.524 1024.17 608.474 978.716 608.474H880.705V1072.25Z" fill="white"/>
              <path d="M593.806 1292.38C593.238 1286.65 590.799 1282.2 586.491 1279.03C582.182 1275.85 576.335 1274.27 568.948 1274.27C563.929 1274.27 559.692 1274.98 556.235 1276.4C552.779 1277.77 550.127 1279.69 548.281 1282.15C546.481 1284.61 545.582 1287.41 545.582 1290.53C545.487 1293.14 546.031 1295.41 547.215 1297.35C548.446 1299.29 550.127 1300.97 552.258 1302.39C554.388 1303.77 556.851 1304.97 559.644 1306.01C562.438 1307.01 565.421 1307.86 568.593 1308.57L581.661 1311.7C588.006 1313.12 593.83 1315.01 599.133 1317.38C604.436 1319.75 609.029 1322.66 612.911 1326.11C616.794 1329.57 619.8 1333.64 621.931 1338.33C624.109 1343.02 625.222 1348.39 625.269 1354.45C625.222 1363.35 622.949 1371.07 618.451 1377.61C614 1384.09 607.561 1389.13 599.133 1392.73C590.752 1396.28 580.643 1398.06 568.806 1398.06C557.064 1398.06 546.836 1396.26 538.124 1392.66C529.46 1389.06 522.689 1383.74 517.812 1376.68C512.982 1369.58 510.449 1360.8 510.212 1350.33H539.971C540.302 1355.21 541.699 1359.28 544.161 1362.55C546.671 1365.77 550.009 1368.21 554.175 1369.86C558.389 1371.47 563.148 1372.28 568.451 1372.28C573.659 1372.28 578.181 1371.52 582.016 1370.01C585.899 1368.49 588.906 1366.38 591.036 1363.68C593.167 1360.99 594.232 1357.88 594.232 1354.38C594.232 1351.11 593.262 1348.37 591.32 1346.14C589.426 1343.92 586.633 1342.02 582.94 1340.46C579.294 1338.9 574.819 1337.48 569.516 1336.2L553.678 1332.22C541.415 1329.24 531.732 1324.57 524.63 1318.23C517.528 1311.89 514 1303.34 514.048 1292.59C514 1283.78 516.344 1276.09 521.079 1269.51C525.861 1262.93 532.419 1257.79 540.752 1254.1C549.085 1250.4 558.555 1248.56 569.161 1248.56C579.957 1248.56 589.379 1250.4 597.428 1254.1C605.525 1257.79 611.822 1262.93 616.32 1269.51C620.818 1276.09 623.138 1283.71 623.281 1292.38H593.806ZM694.676 1398.13C683.644 1398.13 674.103 1395.79 666.054 1391.1C658.052 1386.36 651.873 1379.78 647.517 1371.36C643.161 1362.88 640.983 1353.05 640.983 1341.88C640.983 1330.61 643.161 1320.76 647.517 1312.34C651.873 1303.86 658.052 1297.28 666.054 1292.59C674.103 1287.86 683.644 1285.49 694.676 1285.49C705.708 1285.49 715.225 1287.86 723.227 1292.59C731.277 1297.28 737.479 1303.86 741.835 1312.34C746.191 1320.76 748.369 1330.61 748.369 1341.88C748.369 1353.05 746.191 1362.88 741.835 1371.36C737.479 1379.78 731.277 1386.36 723.227 1391.1C715.225 1395.79 705.708 1398.13 694.676 1398.13ZM694.818 1374.69C699.837 1374.69 704.027 1373.27 707.389 1370.43C710.751 1367.54 713.284 1363.61 714.989 1358.64C716.741 1353.67 717.616 1348.01 717.616 1341.67C717.616 1335.32 716.741 1329.66 714.989 1324.69C713.284 1319.72 710.751 1315.79 707.389 1312.9C704.027 1310.02 699.837 1308.57 694.818 1308.57C689.752 1308.57 685.491 1310.02 682.034 1312.9C678.625 1315.79 676.045 1319.72 674.293 1324.69C672.588 1329.66 671.736 1335.32 671.736 1341.67C671.736 1348.01 672.588 1353.67 674.293 1358.64C676.045 1363.61 678.625 1367.54 682.034 1370.43C685.491 1373.27 689.752 1374.69 694.818 1374.69ZM826.707 1286.91V1309.64H759.378V1286.91H826.707ZM774.79 1396V1279.03C774.79 1271.12 776.329 1264.56 779.406 1259.35C782.531 1254.14 786.793 1250.24 792.19 1247.63C797.588 1245.03 803.72 1243.73 810.585 1243.73C815.225 1243.73 819.463 1244.08 823.298 1244.79C827.181 1245.5 830.069 1246.14 831.963 1246.71L826.565 1269.44C825.382 1269.06 823.914 1268.7 822.162 1268.37C820.457 1268.04 818.705 1267.88 816.906 1267.88C812.455 1267.88 809.354 1268.92 807.602 1271C805.85 1273.04 804.974 1275.9 804.974 1279.59V1396H774.79ZM903.217 1286.91V1309.64H837.521V1286.91H903.217ZM852.435 1260.77H882.691V1362.48C882.691 1365.27 883.117 1367.45 883.969 1369.01C884.822 1370.53 886.005 1371.59 887.521 1372.21C889.083 1372.82 890.882 1373.13 892.918 1373.13C894.339 1373.13 895.759 1373.01 897.18 1372.78C898.6 1372.49 899.689 1372.28 900.447 1372.14L905.205 1394.65C903.69 1395.12 901.559 1395.67 898.813 1396.28C896.067 1396.95 892.729 1397.35 888.799 1397.49C881.507 1397.78 875.115 1396.8 869.623 1394.58C864.178 1392.35 859.94 1388.9 856.91 1384.21C853.879 1379.52 852.388 1373.6 852.435 1366.45V1260.77ZM1107.67 1396H1056.11V1250.55H1108.1C1122.73 1250.55 1135.32 1253.46 1145.88 1259.28C1156.44 1265.06 1164.56 1273.37 1170.24 1284.21C1175.97 1295.05 1178.84 1308.03 1178.84 1323.13C1178.84 1338.28 1175.97 1351.3 1170.24 1362.19C1164.56 1373.08 1156.39 1381.44 1145.74 1387.26C1135.14 1393.09 1122.45 1396 1107.67 1396ZM1086.86 1369.65H1106.39C1115.49 1369.65 1123.13 1368.04 1129.34 1364.82C1135.59 1361.55 1140.27 1356.51 1143.4 1349.69C1146.57 1342.83 1148.16 1333.97 1148.16 1323.13C1148.16 1312.38 1146.57 1303.6 1143.4 1296.78C1140.27 1289.96 1135.61 1284.94 1129.41 1281.72C1123.2 1278.5 1115.56 1276.89 1106.47 1276.89H1086.86V1369.65ZM1232.16 1398.06C1225.2 1398.06 1219 1396.85 1213.55 1394.44C1208.11 1391.98 1203.8 1388.35 1200.62 1383.57C1197.5 1378.74 1195.94 1372.73 1195.94 1365.53C1195.94 1359.47 1197.05 1354.38 1199.27 1350.26C1201.5 1346.14 1204.53 1342.83 1208.37 1340.32C1212.2 1337.81 1216.56 1335.91 1221.43 1334.64C1226.36 1333.36 1231.52 1332.46 1236.92 1331.94C1243.26 1331.27 1248.38 1330.66 1252.26 1330.09C1256.14 1329.48 1258.96 1328.58 1260.71 1327.39C1262.46 1326.21 1263.34 1324.46 1263.34 1322.14V1321.71C1263.34 1317.21 1261.92 1313.73 1259.08 1311.27C1256.28 1308.81 1252.31 1307.58 1247.14 1307.58C1241.7 1307.58 1237.37 1308.78 1234.15 1311.2C1230.93 1313.57 1228.8 1316.55 1227.75 1320.15L1199.77 1317.88C1201.19 1311.25 1203.99 1305.52 1208.15 1300.69C1212.32 1295.81 1217.69 1292.07 1224.27 1289.47C1230.9 1286.81 1238.57 1285.49 1247.29 1285.49C1253.35 1285.49 1259.15 1286.2 1264.69 1287.62C1270.27 1289.04 1275.22 1291.24 1279.53 1294.22C1283.89 1297.21 1287.32 1301.04 1289.83 1305.73C1292.34 1310.37 1293.59 1315.93 1293.59 1322.42V1396H1264.9V1380.87H1264.05C1262.3 1384.28 1259.95 1387.29 1257.02 1389.89C1254.08 1392.45 1250.55 1394.46 1246.43 1395.93C1242.31 1397.35 1237.56 1398.06 1232.16 1398.06ZM1240.82 1377.18C1245.27 1377.18 1249.2 1376.3 1252.61 1374.55C1256.02 1372.75 1258.7 1370.34 1260.64 1367.31C1262.58 1364.28 1263.55 1360.84 1263.55 1357.01V1345.43C1262.6 1346.05 1261.3 1346.62 1259.64 1347.14C1258.03 1347.61 1256.21 1348.06 1254.18 1348.49C1252.14 1348.86 1250.1 1349.22 1248.07 1349.55C1246.03 1349.84 1244.18 1350.1 1242.53 1350.33C1238.98 1350.85 1235.88 1351.68 1233.22 1352.82C1230.57 1353.95 1228.51 1355.49 1227.04 1357.43C1225.58 1359.33 1224.84 1361.7 1224.84 1364.54C1224.84 1368.66 1226.33 1371.8 1229.32 1373.98C1232.35 1376.11 1236.18 1377.18 1240.82 1377.18ZM1375.09 1286.91V1309.64H1309.4V1286.91H1375.09ZM1324.31 1260.77H1354.57V1362.48C1354.57 1365.27 1354.99 1367.45 1355.84 1369.01C1356.7 1370.53 1357.88 1371.59 1359.4 1372.21C1360.96 1372.82 1362.76 1373.13 1364.79 1373.13C1366.21 1373.13 1367.63 1373.01 1369.05 1372.78C1370.48 1372.49 1371.56 1372.28 1372.32 1372.14L1377.08 1394.65C1375.57 1395.12 1373.43 1395.67 1370.69 1396.28C1367.94 1396.95 1364.6 1397.35 1360.67 1397.49C1353.38 1397.78 1346.99 1396.8 1341.5 1394.58C1336.05 1392.35 1331.82 1388.9 1328.78 1384.21C1325.75 1379.52 1324.26 1373.6 1324.31 1366.45V1260.77ZM1425.91 1398.06C1418.95 1398.06 1412.75 1396.85 1407.3 1394.44C1401.86 1391.98 1397.55 1388.35 1394.37 1383.57C1391.25 1378.74 1389.69 1372.73 1389.69 1365.53C1389.69 1359.47 1390.8 1354.38 1393.02 1350.26C1395.25 1346.14 1398.28 1342.83 1402.12 1340.32C1405.95 1337.81 1410.31 1335.91 1415.18 1334.64C1420.11 1333.36 1425.27 1332.46 1430.67 1331.94C1437.01 1331.27 1442.13 1330.66 1446.01 1330.09C1449.89 1329.48 1452.71 1328.58 1454.46 1327.39C1456.21 1326.21 1457.09 1324.46 1457.09 1322.14V1321.71C1457.09 1317.21 1455.67 1313.73 1452.83 1311.27C1450.03 1308.81 1446.06 1307.58 1440.89 1307.58C1435.45 1307.58 1431.12 1308.78 1427.9 1311.2C1424.68 1313.57 1422.55 1316.55 1421.5 1320.15L1393.52 1317.88C1394.94 1311.25 1397.74 1305.52 1401.9 1300.69C1406.07 1295.81 1411.44 1292.07 1418.02 1289.47C1424.65 1286.81 1432.32 1285.49 1441.04 1285.49C1447.1 1285.49 1452.9 1286.2 1458.44 1287.62C1464.02 1289.04 1468.97 1291.24 1473.28 1294.22C1477.64 1297.21 1481.07 1301.04 1483.58 1305.73C1486.09 1310.37 1487.34 1315.93 1487.34 1322.42V1396H1458.65V1380.87H1457.8C1456.05 1384.28 1453.7 1387.29 1450.77 1389.89C1447.83 1392.45 1444.3 1394.46 1440.18 1395.93C1436.06 1397.35 1431.31 1398.06 1425.91 1398.06ZM1434.57 1377.18C1439.02 1377.18 1442.95 1376.3 1446.36 1374.55C1449.77 1372.75 1452.45 1370.34 1454.39 1367.31C1456.33 1364.28 1457.3 1360.84 1457.3 1357.01V1345.43C1456.35 1346.05 1455.05 1346.62 1453.39 1347.14C1451.78 1347.61 1449.96 1348.06 1447.93 1348.49C1445.89 1348.86 1443.85 1349.22 1441.82 1349.55C1439.78 1349.84 1437.93 1350.1 1436.28 1350.33C1432.73 1350.85 1429.63 1351.68 1426.97 1352.82C1424.32 1353.95 1422.26 1355.49 1420.79 1357.43C1419.33 1359.33 1418.59 1361.7 1418.59 1364.54C1418.59 1368.66 1420.08 1371.8 1423.07 1373.98C1426.1 1376.11 1429.93 1377.18 1434.57 1377.18Z" fill="url(#paint1_linear_220_96)"/>
              <path d="M967.528 1398.13C957.585 1398.13 949.038 1396.33 941.888 1392.73C934.739 1389.13 929.223 1384.28 925.34 1378.17C921.505 1372.02 919.587 1365.08 919.587 1357.36C919.587 1351.54 920.771 1346.38 923.138 1341.88C925.553 1337.38 928.868 1333.22 933.082 1329.38C937.343 1325.55 942.267 1321.73 947.854 1317.95L973.636 1300.4C977.424 1297.94 980.288 1295.34 982.229 1292.59C984.218 1289.84 985.212 1286.62 985.212 1282.93C985.212 1279.81 983.887 1276.85 981.235 1274.05C978.631 1271.26 975.032 1269.86 970.44 1269.86C967.362 1269.86 964.639 1270.6 962.272 1272.07C959.952 1273.49 958.129 1275.36 956.803 1277.68C955.525 1280 954.886 1282.46 954.886 1285.06C954.886 1288.23 955.762 1291.45 957.513 1294.72C959.313 1297.99 961.633 1301.37 964.474 1304.88C967.362 1308.38 970.44 1312.1 973.707 1316.03L1041.96 1396H1014.12L957.442 1331.09C953.228 1326.16 949.156 1321.31 945.227 1316.53C941.344 1311.74 938.148 1306.77 935.638 1301.61C933.176 1296.4 931.945 1290.77 931.945 1284.71C931.945 1277.84 933.531 1271.71 936.704 1266.31C939.876 1260.87 944.303 1256.58 949.985 1253.46C955.714 1250.33 962.414 1248.77 970.085 1248.77C977.755 1248.77 984.336 1250.29 989.829 1253.32C995.321 1256.35 999.559 1260.37 1002.54 1265.39C1005.52 1270.41 1007.02 1275.88 1007.02 1281.8C1007.02 1288.66 1005.31 1294.82 1001.9 1300.26C998.494 1305.66 993.759 1310.56 987.698 1314.96L958.295 1336.48C953.465 1339.99 950.009 1343.54 947.925 1347.14C945.842 1350.69 944.8 1353.72 944.8 1356.23C944.8 1360.06 945.771 1363.54 947.712 1366.67C949.654 1369.79 952.376 1372.3 955.88 1374.2C959.431 1376.04 963.574 1376.97 968.309 1376.97C973.517 1376.97 978.655 1375.81 983.721 1373.49C988.787 1371.12 993.404 1367.76 997.57 1363.4C1001.74 1359.04 1005.05 1353.84 1007.51 1347.78C1009.98 1341.67 1011.21 1334.9 1011.21 1327.46H1033.29C1033.29 1336.65 1032.28 1344.65 1030.24 1351.47C1028.2 1358.24 1025.58 1363.97 1022.36 1368.66C1019.14 1373.3 1015.73 1377.01 1012.13 1379.81C1010.99 1380.61 1009.9 1381.42 1008.86 1382.22C1007.82 1383.03 1006.73 1383.83 1005.6 1384.64C1000.48 1389.28 994.493 1392.69 987.627 1394.86C980.809 1397.04 974.109 1398.13 967.528 1398.13Z" fill="url(#paint2_linear_220_96)"/>
              <path d="M516.359 1420.38H581.672V1433.19H529.172V1458.81H573.984V1471.62H529.172V1497.19H581.672V1510H516.359V1420.38ZM658.484 1510H646.172V1455.75H611.859V1510H599.609V1443.44H611.859V1455.19C611.943 1453.56 612.318 1452.04 612.984 1450.62C613.651 1449.17 614.526 1447.92 615.609 1446.88C616.734 1445.79 618.026 1444.96 619.484 1444.38C620.943 1443.75 622.505 1443.44 624.172 1443.44H646.172C647.88 1443.44 649.484 1443.77 650.984 1444.44C652.484 1445.06 653.776 1445.94 654.859 1447.06C655.984 1448.15 656.859 1449.44 657.484 1450.94C658.151 1452.44 658.484 1454.04 658.484 1455.75V1510ZM678.984 1455.75C678.984 1454.04 679.297 1452.44 679.922 1450.94C680.589 1449.44 681.464 1448.15 682.547 1447.06C683.672 1445.94 684.984 1445.06 686.484 1444.44C687.984 1443.77 689.568 1443.44 691.234 1443.44H713.297C714.922 1443.44 716.464 1443.75 717.922 1444.38C719.38 1444.96 720.651 1445.79 721.734 1446.88C722.859 1447.92 723.755 1449.17 724.422 1450.62C725.13 1452.04 725.505 1453.56 725.547 1455.19V1443.44H737.859V1524.56C737.859 1526.27 737.526 1527.88 736.859 1529.38C736.234 1530.88 735.359 1532.17 734.234 1533.25C733.151 1534.38 731.859 1535.25 730.359 1535.88C728.859 1536.54 727.255 1536.88 725.547 1536.88H686.672V1524.56H725.547V1507.44H691.234C689.568 1507.44 687.984 1507.12 686.484 1506.5C684.984 1505.83 683.672 1504.96 682.547 1503.88C681.464 1502.75 680.589 1501.44 679.922 1499.94C679.297 1498.44 678.984 1496.83 678.984 1495.12V1455.75ZM725.547 1495.12V1455.75H691.234V1495.12H725.547ZM771.297 1443.44V1510H758.984V1443.44H771.297ZM758.359 1417.81H771.922V1430.62H758.359V1417.81ZM851.359 1510H839.047V1455.75H804.734V1510H792.484V1443.44H804.734V1455.19C804.818 1453.56 805.193 1452.04 805.859 1450.62C806.526 1449.17 807.401 1447.92 808.484 1446.88C809.609 1445.79 810.901 1444.96 812.359 1444.38C813.818 1443.75 815.38 1443.44 817.047 1443.44H839.047C840.755 1443.44 842.359 1443.77 843.859 1444.44C845.359 1445.06 846.651 1445.94 847.734 1447.06C848.859 1448.15 849.734 1449.44 850.359 1450.94C851.026 1452.44 851.359 1454.04 851.359 1455.75V1510ZM928.172 1483H884.109V1497.69H928.172V1510H884.109C882.443 1510 880.859 1509.69 879.359 1509.06C877.859 1508.4 876.547 1507.52 875.422 1506.44C874.339 1505.31 873.464 1504 872.797 1502.5C872.172 1501 871.859 1499.4 871.859 1497.69V1455.75C871.859 1454.04 872.172 1452.44 872.797 1450.94C873.464 1449.44 874.339 1448.15 875.422 1447.06C876.547 1445.94 877.859 1445.06 879.359 1444.44C880.859 1443.77 882.443 1443.44 884.109 1443.44H915.859C917.568 1443.44 919.172 1443.77 920.672 1444.44C922.172 1445.06 923.464 1445.94 924.547 1447.06C925.672 1448.15 926.547 1449.44 927.172 1450.94C927.839 1452.44 928.172 1454.04 928.172 1455.75V1483ZM884.109 1455.75V1470.69H915.859V1455.75H884.109ZM1005.05 1483H960.984V1497.69H1005.05V1510H960.984C959.318 1510 957.734 1509.69 956.234 1509.06C954.734 1508.4 953.422 1507.52 952.297 1506.44C951.214 1505.31 950.339 1504 949.672 1502.5C949.047 1501 948.734 1499.4 948.734 1497.69V1455.75C948.734 1454.04 949.047 1452.44 949.672 1450.94C950.339 1449.44 951.214 1448.15 952.297 1447.06C953.422 1445.94 954.734 1445.06 956.234 1444.44C957.734 1443.77 959.318 1443.44 960.984 1443.44H992.734C994.443 1443.44 996.047 1443.77 997.547 1444.44C999.047 1445.06 1000.34 1445.94 1001.42 1447.06C1002.55 1448.15 1003.42 1449.44 1004.05 1450.94C1004.71 1452.44 1005.05 1454.04 1005.05 1455.75V1483ZM960.984 1455.75V1470.69H992.734V1455.75H960.984ZM1037.86 1455.75V1510H1025.61V1443.44H1037.86V1455.19C1037.94 1453.56 1038.32 1452.04 1038.98 1450.62C1039.65 1449.17 1040.53 1447.92 1041.61 1446.88C1042.73 1445.79 1044.03 1444.96 1045.48 1444.38C1046.94 1443.75 1048.51 1443.44 1050.17 1443.44H1063.23C1064.94 1443.44 1066.53 1443.77 1067.98 1444.44C1069.48 1445.06 1070.8 1445.94 1071.92 1447.06C1073.05 1448.15 1073.92 1449.44 1074.55 1450.94C1075.21 1452.44 1075.55 1454.04 1075.55 1455.75V1467H1063.23V1455.75H1037.86ZM1162.19 1502.3C1162.19 1503.37 1161.98 1504.38 1161.56 1505.31C1161.17 1506.25 1160.62 1507.07 1159.92 1507.77C1159.24 1508.45 1158.44 1509 1157.5 1509.41C1156.56 1509.8 1155.56 1510 1154.49 1510H1133.05V1526.8H1125.39V1468.4H1133.05V1475.43C1133.12 1474.44 1133.39 1473.53 1133.83 1472.7C1134.27 1471.84 1134.83 1471.09 1135.51 1470.47C1136.18 1469.82 1136.97 1469.31 1137.85 1468.95C1138.76 1468.58 1139.73 1468.4 1140.74 1468.4H1154.49C1155.56 1468.4 1156.56 1468.61 1157.5 1469.02C1158.44 1469.41 1159.24 1469.96 1159.92 1470.66C1160.62 1471.34 1161.17 1472.15 1161.56 1473.09C1161.98 1474.02 1162.19 1475.03 1162.19 1476.09V1502.3ZM1154.49 1502.3V1476.09H1133.05V1502.3H1154.49ZM1210.98 1502.3C1210.98 1503.37 1210.77 1504.38 1210.35 1505.31C1209.96 1506.25 1209.41 1507.07 1208.71 1507.77C1208.03 1508.45 1207.23 1509 1206.29 1509.41C1205.38 1509.8 1204.39 1510 1203.32 1510H1182.66C1181.61 1510 1180.62 1509.8 1179.69 1509.41C1178.75 1509 1177.93 1508.45 1177.23 1507.77C1176.55 1507.07 1176 1506.25 1175.59 1505.31C1175.2 1504.38 1175 1503.37 1175 1502.3V1476.09C1175 1475.03 1175.2 1474.02 1175.59 1473.09C1176 1472.15 1176.55 1471.34 1177.23 1470.66C1177.93 1469.96 1178.75 1469.41 1179.69 1469.02C1180.62 1468.61 1181.61 1468.4 1182.66 1468.4H1203.32C1204.39 1468.4 1205.38 1468.61 1206.29 1469.02C1207.23 1469.41 1208.03 1469.96 1208.71 1470.66C1209.41 1471.34 1209.96 1472.15 1210.35 1473.09C1210.77 1474.02 1210.98 1475.03 1210.98 1476.09V1502.3ZM1182.66 1476.09V1502.3H1203.32V1476.09H1182.66ZM1231.48 1476.09V1510H1223.83V1468.4H1231.48V1475.74C1231.54 1474.73 1231.77 1473.78 1232.19 1472.89C1232.6 1471.98 1233.15 1471.2 1233.83 1470.55C1234.53 1469.87 1235.34 1469.35 1236.25 1468.98C1237.16 1468.59 1238.14 1468.4 1239.18 1468.4H1247.34C1248.41 1468.4 1249.4 1468.61 1250.31 1469.02C1251.25 1469.41 1252.07 1469.96 1252.77 1470.66C1253.48 1471.34 1254.02 1472.15 1254.41 1473.09C1254.83 1474.02 1255.04 1475.03 1255.04 1476.09V1483.12H1247.34V1476.09H1231.48ZM1262.19 1468.4H1272.34V1455.59H1280.04V1468.4H1293.71V1476.09H1280.04V1502.3H1293.71V1510H1280.04C1279 1510 1278.01 1509.8 1277.07 1509.41C1276.13 1509 1275.31 1508.45 1274.61 1507.77C1273.91 1507.07 1273.35 1506.25 1272.93 1505.31C1272.54 1504.38 1272.34 1503.37 1272.34 1502.3V1476.09H1262.19V1468.4ZM1321.99 1460.08V1468.4H1335.66V1476.09H1321.99V1510H1314.3V1476.09H1304.14V1468.4H1314.3V1460.08C1314.3 1459.01 1314.49 1458.02 1314.88 1457.11C1315.3 1456.17 1315.86 1455.35 1316.56 1454.65C1317.27 1453.95 1318.09 1453.4 1319.02 1453.01C1319.96 1452.59 1320.95 1452.38 1321.99 1452.38H1335.66V1460.08H1321.99ZM1382.07 1502.3C1382.07 1503.37 1381.86 1504.38 1381.45 1505.31C1381.05 1506.25 1380.51 1507.07 1379.8 1507.77C1379.13 1508.45 1378.32 1509 1377.38 1509.41C1376.47 1509.8 1375.48 1510 1374.41 1510H1353.75C1352.71 1510 1351.72 1509.8 1350.78 1509.41C1349.84 1509 1349.02 1508.45 1348.32 1507.77C1347.64 1507.07 1347.1 1506.25 1346.68 1505.31C1346.29 1504.38 1346.09 1503.37 1346.09 1502.3V1476.09C1346.09 1475.03 1346.29 1474.02 1346.68 1473.09C1347.1 1472.15 1347.64 1471.34 1348.32 1470.66C1349.02 1469.96 1349.84 1469.41 1350.78 1469.02C1351.72 1468.61 1352.71 1468.4 1353.75 1468.4H1374.41C1375.48 1468.4 1376.47 1468.61 1377.38 1469.02C1378.32 1469.41 1379.13 1469.96 1379.8 1470.66C1380.51 1471.34 1381.05 1472.15 1381.45 1473.09C1381.86 1474.02 1382.07 1475.03 1382.07 1476.09V1502.3ZM1353.75 1476.09V1502.3H1374.41V1476.09H1353.75ZM1402.58 1452.38V1510H1394.92V1452.38H1402.58ZM1423.48 1468.4V1510H1415.78V1468.4H1423.48ZM1415.39 1452.38H1423.87V1460.39H1415.39V1452.38ZM1472.7 1502.3C1472.7 1503.37 1472.49 1504.38 1472.07 1505.31C1471.68 1506.25 1471.13 1507.07 1470.43 1507.77C1469.75 1508.45 1468.95 1509 1468.01 1509.41C1467.1 1509.8 1466.11 1510 1465.04 1510H1444.38C1443.33 1510 1442.34 1509.8 1441.41 1509.41C1440.47 1509 1439.65 1508.45 1438.95 1507.77C1438.27 1507.07 1437.72 1506.25 1437.3 1505.31C1436.91 1504.38 1436.72 1503.37 1436.72 1502.3V1476.09C1436.72 1475.03 1436.91 1474.02 1437.3 1473.09C1437.72 1472.15 1438.27 1471.34 1438.95 1470.66C1439.65 1469.96 1440.47 1469.41 1441.41 1469.02C1442.34 1468.61 1443.33 1468.4 1444.38 1468.4H1465.04C1466.11 1468.4 1467.1 1468.61 1468.01 1469.02C1468.95 1469.41 1469.75 1469.96 1470.43 1470.66C1471.13 1471.34 1471.68 1472.15 1472.07 1473.09C1472.49 1474.02 1472.7 1475.03 1472.7 1476.09V1502.3ZM1444.38 1476.09V1502.3H1465.04V1476.09H1444.38Z" fill="white"/>
              <path d="M465.892 1527.21L489.071 1550.22L512.079 1527.04L488.9 1504.03L465.892 1527.21ZM1521.1 1523.29L1497.92 1500.28L1474.92 1523.46L1498.1 1546.47L1521.1 1523.29ZM489 1531.13L1498.03 1527.37L1498 1519.37L488.971 1523.13L489 1531.13Z" fill="#C05621"/>
              <g clip-path="url(#clip0_220_96)">
              <path d="M1099.25 822.031C1092.62 822.041 1086.16 824.118 1080.75 827.978C1075.34 831.839 1071.24 837.293 1069.02 843.594H1049.37C1044.4 843.583 1039.49 842.409 1035.04 840.164C1030.59 837.919 1026.72 834.665 1023.72 830.656L1002.72 802.409C1008.79 798.426 1013.34 792.489 1015.64 785.565C1017.93 778.64 1017.84 771.136 1015.37 764.273C1012.9 757.409 1008.2 751.59 1002.04 747.762C995.877 743.934 988.611 742.323 981.424 743.189C974.238 744.056 967.553 747.35 962.458 752.536C957.363 757.721 954.157 764.494 953.362 771.751C952.566 779.008 954.229 786.323 958.078 792.506C961.927 798.689 967.737 803.376 974.562 805.805V874.195C967.432 876.738 961.422 881.742 957.595 888.323C953.768 894.904 952.37 902.638 953.649 910.158C954.928 917.678 958.801 924.499 964.584 929.417C970.367 934.335 977.687 937.032 985.25 937.032C992.813 937.032 1000.13 934.335 1005.92 929.417C1011.7 924.499 1015.57 917.678 1016.85 910.158C1018.13 902.638 1016.73 894.904 1012.91 888.323C1009.08 881.742 1003.07 876.738 995.937 874.195V829.219L1006.62 843.594C1011.62 850.275 1018.07 855.699 1025.49 859.44C1032.91 863.181 1041.08 865.138 1049.37 865.156H1069.02C1070.98 870.747 1074.43 875.686 1078.98 879.435C1083.54 883.184 1089.02 885.598 1094.85 886.412C1100.67 887.227 1106.6 886.411 1111.99 884.054C1117.39 881.697 1122.04 877.89 1125.43 873.048C1128.82 868.207 1130.83 862.517 1131.24 856.601C1131.64 850.686 1130.43 844.772 1127.72 839.506C1125.02 834.24 1120.94 829.825 1115.92 826.743C1110.89 823.661 1105.13 822.031 1099.25 822.031ZM985.25 764.531C987.364 764.531 989.43 765.164 991.188 766.348C992.945 767.533 994.315 769.217 995.124 771.187C995.933 773.157 996.145 775.324 995.732 777.416C995.32 779.507 994.302 781.428 992.807 782.936C991.313 784.444 989.408 785.471 987.335 785.887C985.262 786.303 983.113 786.089 981.16 785.273C979.207 784.457 977.538 783.075 976.364 781.302C975.189 779.529 974.562 777.445 974.562 775.313C974.562 772.453 975.688 769.711 977.693 767.689C979.697 765.667 982.415 764.531 985.25 764.531ZM985.25 915.469C983.136 915.469 981.07 914.836 979.312 913.652C977.555 912.467 976.185 910.783 975.376 908.813C974.567 906.843 974.355 904.676 974.768 902.584C975.18 900.493 976.198 898.572 977.693 897.064C979.187 895.556 981.092 894.529 983.165 894.113C985.238 893.697 987.387 893.911 989.34 894.727C991.293 895.543 992.962 896.925 994.136 898.698C995.311 900.471 995.937 902.555 995.937 904.688C995.937 907.547 994.811 910.289 992.807 912.311C990.803 914.333 988.084 915.469 985.25 915.469ZM1099.25 865.156C1097.14 865.156 1095.07 864.524 1093.31 863.339C1091.55 862.155 1090.18 860.471 1089.38 858.501C1088.57 856.531 1088.36 854.363 1088.77 852.272C1089.18 850.18 1090.2 848.259 1091.69 846.752C1093.19 845.244 1095.09 844.217 1097.16 843.801C1099.24 843.385 1101.39 843.598 1103.34 844.414C1105.29 845.23 1106.96 846.612 1108.14 848.385C1109.31 850.158 1109.94 852.243 1109.94 854.375C1109.94 857.234 1108.81 859.977 1106.81 861.999C1104.8 864.02 1102.08 865.156 1099.25 865.156Z" fill="#3E91C0"/>
              <path d="M978.68 905.291V864.875C978.68 863.267 979.293 861.725 980.385 860.588C981.476 859.451 982.956 858.812 984.5 858.812C986.044 858.812 987.524 859.451 988.615 860.588C989.707 861.725 990.32 863.267 990.32 864.875V905.291C990.32 906.899 989.707 908.441 988.615 909.578C987.524 910.715 986.044 911.354 984.5 911.354C982.956 911.354 981.476 910.715 980.385 909.578C979.293 908.441 978.68 906.899 978.68 905.291ZM1010.96 863.864C1009.66 863.035 1008.11 862.765 1006.63 863.111C1005.15 863.457 1003.86 864.392 1003.03 865.716C1002.2 867.041 1001.9 868.65 1002.2 870.201C1002.49 871.752 1003.35 873.122 1004.6 874.019C1015.25 881.228 1021.36 892.661 1021.36 905.291C1021.36 915.475 1017.48 925.241 1010.56 932.441C1003.65 939.642 994.276 943.687 984.5 943.687C974.724 943.687 965.349 939.642 958.436 932.441C951.523 925.241 947.64 915.475 947.64 905.291C947.64 892.661 953.746 881.228 964.397 873.994C965.58 873.07 966.381 871.712 966.638 870.195C966.895 868.678 966.587 867.116 965.779 865.827C964.97 864.537 963.72 863.617 962.283 863.252C960.847 862.888 959.331 863.107 958.043 863.864C944.032 873.352 936 888.463 936 905.291C936 918.69 941.11 931.541 950.205 941.015C959.301 950.49 971.637 955.812 984.5 955.812C997.363 955.812 1009.7 950.49 1018.79 941.015C1027.89 931.541 1033 918.69 1033 905.291C1033 888.463 1024.97 873.352 1010.96 863.864Z" fill="#D16847"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear_220_96" x1="1124.5" y1="204" x2="1205.15" y2="1959.86" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9A4CAD"/>
              <stop offset="0.540723" stop-color="#181924"/>
              <stop offset="1" stop-color="#0E132B"/>
              </linearGradient>
              <linearGradient id="paint1_linear_220_96" x1="1000.5" y1="1202" x2="1000.5" y2="1444" gradientUnits="userSpaceOnUse">
              <stop offset="0.390625" stop-color="#31A8CE"/>
              <stop offset="0.614583" stop-color="#944CAD"/>
              <stop offset="1" stop-color="#2F4E89" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_220_96" x1="1000.5" y1="1202" x2="1000.5" y2="1444" gradientUnits="userSpaceOnUse">
              <stop offset="0.109375" stop-color="#0B99EA"/>
              <stop offset="0.885417" stop-color="#944CAD" stop-opacity="0"/>
              </linearGradient>
              <clipPath id="clip0_220_96">
              <rect width="228" height="230" fill="white" transform="translate(914 725)"/>
              </clipPath>
              </defs>
    
    </svg>




  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
          <TwitterLogo size={32} />          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
          <LinkedinLogo size={32} />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
          <InstagramLogo size={32} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
