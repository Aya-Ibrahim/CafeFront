package beans;
// Generated Apr 26, 2017 2:26:31 AM by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Addition generated by hbm2java
 */
@Entity
@Table(name="addition"
    ,catalog="arkancafe"
)
public class Addition  implements java.io.Serializable {


     private Integer addId;
     private Item item;
     private String addName;
     private int unitId;
     private long price;
     private Set orderlineAdditions = new HashSet(0);

    public Addition() {
    }

	
    public Addition(Item item, String addName, int unitId, long price) {
        this.item = item;
        this.addName = addName;
        this.unitId = unitId;
        this.price = price;
    }
    public Addition(Item item, String addName, int unitId, long price, Set orderlineAdditions) {
       this.item = item;
       this.addName = addName;
       this.unitId = unitId;
       this.price = price;
       this.orderlineAdditions = orderlineAdditions;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="add_id", unique=true, nullable=false)
    public Integer getAddId() {
        return this.addId;
    }
    
    public void setAddId(Integer addId) {
        this.addId = addId;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="item_id", nullable=false)
    public Item getItem() {
        return this.item;
    }
    
    public void setItem(Item item) {
        this.item = item;
    }

    
    @Column(name="add_name", nullable=false, length=50)
    public String getAddName() {
        return this.addName;
    }
    
    public void setAddName(String addName) {
        this.addName = addName;
    }

    
    @Column(name="unit_id", nullable=false)
    public int getUnitId() {
        return this.unitId;
    }
    
    public void setUnitId(int unitId) {
        this.unitId = unitId;
    }

    
    @Column(name="price", nullable=false, precision=10, scale=0)
    public long getPrice() {
        return this.price;
    }
    
    public void setPrice(long price) {
        this.price = price;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="addition")
    public Set getOrderlineAdditions() {
        return this.orderlineAdditions;
    }
    
    public void setOrderlineAdditions(Set orderlineAdditions) {
        this.orderlineAdditions = orderlineAdditions;
    }




}

