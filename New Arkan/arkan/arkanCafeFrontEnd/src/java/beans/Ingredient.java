package beans;
// Generated Apr 26, 2017 2:26:31 AM by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Ingredient generated by hbm2java
 */
@Entity
@Table(name="ingredient"
    ,catalog="arkancafe"
)
public class Ingredient  implements java.io.Serializable {


     private int ingId;
     private Unit unit;
     private String ingName;
     private int availableQty;
     private int basePrice;
     private long threshold;
     private Set transactions = new HashSet(0);
     private Set itemIngredients = new HashSet(0);

    public Ingredient() {
    }

	
    public Ingredient(int ingId, Unit unit, String ingName, int availableQty, int basePrice, long threshold) {
        this.ingId = ingId;
        this.unit = unit;
        this.ingName = ingName;
        this.availableQty = availableQty;
        this.basePrice = basePrice;
        this.threshold = threshold;
    }
    public Ingredient(int ingId, Unit unit, String ingName, int availableQty, int basePrice, long threshold, Set transactions, Set itemIngredients) {
       this.ingId = ingId;
       this.unit = unit;
       this.ingName = ingName;
       this.availableQty = availableQty;
       this.basePrice = basePrice;
       this.threshold = threshold;
       this.transactions = transactions;
       this.itemIngredients = itemIngredients;
    }
   
     @Id 

    
    @Column(name="ing_id", unique=true, nullable=false)
    public int getIngId() {
        return this.ingId;
    }
    
    public void setIngId(int ingId) {
        this.ingId = ingId;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="base_unit_id", nullable=false)
    public Unit getUnit() {
        return this.unit;
    }
    
    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    
    @Column(name="ing_name", nullable=false, length=50)
    public String getIngName() {
        return this.ingName;
    }
    
    public void setIngName(String ingName) {
        this.ingName = ingName;
    }

    
    @Column(name="available_Qty", nullable=false)
    public int getAvailableQty() {
        return this.availableQty;
    }
    
    public void setAvailableQty(int availableQty) {
        this.availableQty = availableQty;
    }

    
    @Column(name="base_price", nullable=false)
    public int getBasePrice() {
        return this.basePrice;
    }
    
    public void setBasePrice(int basePrice) {
        this.basePrice = basePrice;
    }

    
    @Column(name="threshold", nullable=false, precision=10, scale=0)
    public long getThreshold() {
        return this.threshold;
    }
    
    public void setThreshold(long threshold) {
        this.threshold = threshold;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="ingredient")
    public Set getTransactions() {
        return this.transactions;
    }
    
    public void setTransactions(Set transactions) {
        this.transactions = transactions;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="ingredient")
    public Set getItemIngredients() {
        return this.itemIngredients;
    }
    
    public void setItemIngredients(Set itemIngredients) {
        this.itemIngredients = itemIngredients;
    }




}


