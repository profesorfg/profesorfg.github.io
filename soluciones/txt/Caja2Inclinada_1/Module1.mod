MODULE Module1
    CONST robtarget home0:=[[501.31,0,487.215],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P_Izq_Arriba:=[[0,0,-5],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P_Izq_Dentro:=[[0,0,10],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P_Dch_Arriba:=[[145,0,-5],[0.707106781,-0,0,-0.707106781],[0,-1,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P_Dch_Dentro:=[[145,0,10],[0.707106781,-0,0,-0.707106781],[0,-1,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P_Izq2_Arriba:=[[0,245,-5],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P_Izq2_Dentro:=[[0,245,10],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget p2_1:=[[25,60,-5],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget p2_1D:=[[25,60,10],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget p2_2D:=[[90,30,10],[0.707106781,-0,0,-0.707106781],[0,-1,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget p2_3D:=[[95,100,10],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P2_4D:=[[35,150,10],[0.707106781,-0,0,-0.707106781],[-1,0,-1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P2_5D:=[[125,150,10],[0.707106781,-0,0,-0.707106781],[0,-1,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget P2_5:=[[125,150,-5],[0.707106781,-0,0,-0.707106781],[0,-1,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    !***********************************************************
    !
    ! Module:  Module1
    !
    ! Description:
    !   <Insert description here>
    !
    ! Author: david
    !
    ! Version: 1.0
    !
    !***********************************************************
    
    
    !***********************************************************
    !
    ! Procedure main
    !
    !   This is the entry point of your program
    !
    !***********************************************************
    PROC main()
        !Add your code here
        MoveJ home0,v1000,z100,punta\WObj:=wobj0;
        MoveL P_Izq_Arriba,v1000,z100,punta\WObj:=WOCaja;
        WaitTime 2;
        MoveL P_Izq_Dentro,v1000,z100,punta\WObj:=WOCaja;
        MoveL P_Izq_Arriba,v1000,z100,punta\WObj:=WOCaja;
        MoveL P_Dch_Arriba,v1000,z100,punta\WObj:=WOCaja;
        WaitTime 2;
        MoveL P_Dch_Dentro,v1000,z100,punta\WObj:=WOCaja;
        MoveL P_Dch_Arriba,v1000,z100,punta\WObj:=WOCaja;
        MoveL P_Izq2_Arriba,v1000,z100,punta\WObj:=WOCaja;
        WaitTime 2;
        MoveL P_Izq2_Dentro,v1000,z100,punta\WObj:=WOCaja;
        MoveL P_Izq2_Arriba,v1000,z100,punta\WObj:=WOCaja;
        MoveL p2_1,v1000,z100,punta\WObj:=WOCaja;
        WaitTime 2;
        MoveL p2_1D,v200,z100,punta\WObj:=WOCaja;
        MoveC p2_2D,p2_3D,v200,z100,punta\WObj:=WOCaja;
        MoveL P2_4D,v200,z100,punta\WObj:=WOCaja;
        MoveL P2_5D,v200,z100,punta\WObj:=WOCaja;
        MoveL P2_5,v1000,z100,punta\WObj:=WOCaja;
        MoveJ home0,v1000,z100,punta\WObj:=wobj0;
    ENDPROC
ENDMODULE