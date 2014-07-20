from pyplasm import *
import sys
sys.path.insert(0, 'C:/Users/661119/lar-cc/lib/py')
from simplexn import *
from larcc import *
from lar2psm import *
from largrid import *
from morph import *
from mapper import *
from splines import *
from scipy import *
from architectural import *
from myfont import *
from sysml import *

#unico blocco iniziale 
master = assemblyDiagramInit([3,3,3])([[0.4,10.7,0.4],[0.4,12.6,0.4],[0.3,2.7,0.3]])
DRAW = COMP([VIEW,STRUCT,MKPOLS])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

#divisione tra sala corridoio cucina camera mia e balcone scale, cameretta, camera mamma 
toMerge = 13
split = assemblyDiagramInit([3,1,1])([[5.5,0.3,5],[12.6],[2.7]])
master = diagram2cell(split,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

#divisione tra sala camera mia ed uno spazio comprensivo di corridoio bagno e cucina 
toMerge = 26
split = assemblyDiagramInit([1,5,1])([[5.5],[4,0.2,4.7,0.2,3.5],[2.7]])
master = diagram2cell(split,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

#divisione tra balcone buco delle scale cameretta e camera di mamma
toMerge = 27
split = assemblyDiagramInit([1,7,1])([[5],[1.3,0.2,2.5,0.2,3.4,0.2,4.8],[2.7]])
master = diagram2cell(split,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

#divisione tra corridoio e lo spazio con bagno e cucina
toMerge = 29
split = assemblyDiagramInit([3,1,1])([[3.5,0.2,1.3],[4.7],[2.7]])
master = diagram2cell(split,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

#divisione tra bagno e cucina
toMerge = 38
split = assemblyDiagramInit([1,3,1])([[3.5],[2.5,0.2,2],[2.7]])
master = diagram2cell(split,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

#per rimuovere il dentro delle camere e il piano superiore 
emptyChain = [27,40,42,30,39,31,33,35,37,13]
solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
DRAW((master[0],solidCV))

exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
exteriorCV += exteriorCells(master)
CV = solidCV + exteriorCV
V = master[0]
FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
#VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))

BF = boundaryCells(solidCV,FV)
boundaryFaces = [FV[face] for face in BF]
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS(B_Rep)))
#VIEW(STRUCT(MKPOLS(B_Rep)))


verts, triangles = quads2tria(B_Rep)
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS((verts, triangles))))
#VIEW(STRUCT(MKPOLS((verts, triangles))))

def objExporter((V,FV), filePath):
    out_file = open(filePath,"w")
    out_file.write("# List of Vertices:\n")
    for v in V:
        out_file.write("v")
        for c in v:
            out_file.write(" " + str(c))
        out_file.write("\n")
    out_file.write("# Face Definitions:\n")
    for f in FV:
        out_file.write("f")
        for v in f:
            out_file.write(" " + str(v+1))
        out_file.write("\n")
    out_file.close()

filePath="prova2.obj"
objExporter((verts, triangles),filePath)